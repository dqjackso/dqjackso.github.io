export interface ChartPoint {
  x: number | string;
  y: number;
}

export interface ChartSpec {
  data: ChartPoint[];
  title: string;
  caption: string;
  xLabel: string;
  yLabel: string;
  numeric: boolean;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Build-time picture of the series, used when the interactive chart cannot run. */
export function chartSvg(spec: ChartSpec): string {
  const width = 720;
  const height = 405;
  const padL = 44;
  const padR = 16;
  const padT = 20;
  const padB = 40;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const ys = spec.data.map((point) => point.y);
  const minY = Math.min(...ys, 0);
  const maxY = Math.max(...ys, 0);
  const ySpan = maxY - minY || 1;
  const yAt = (y: number) => padT + (1 - (y - minY) / ySpan) * innerH;

  let marks = '';
  if (spec.numeric) {
    const xs = spec.data.map((point) => point.x as number);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const xSpan = maxX - minX || 1;
    const xAt = (x: number) => padL + ((x - minX) / xSpan) * innerW;
    const path = spec.data
      .map((point, index) => {
        const command = index === 0 ? 'M' : 'L';
        return `${command}${xAt(point.x as number).toFixed(1)},${yAt(point.y).toFixed(1)}`;
      })
      .join(' ');
    const dots = spec.data
      .map(
        (point) =>
          `<circle cx="${xAt(point.x as number).toFixed(1)}" cy="${yAt(point.y).toFixed(1)}" r="3.5" fill="var(--accent)"/>`,
      )
      .join('');
    marks = `<path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>${dots}`;
  } else {
    const count = spec.data.length || 1;
    const slot = innerW / count;
    const barWidth = slot * 0.62;
    marks = spec.data
      .map((point, index) => {
        const x = padL + index * slot + (slot - barWidth) / 2;
        const baseline = yAt(0);
        const top = yAt(point.y);
        const y = Math.min(baseline, top);
        const barHeight = Math.max(Math.abs(baseline - top), 1);
        return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barHeight.toFixed(1)}" fill="var(--accent)"/>`;
      })
      .join('');
  }

  const label = escapeXml(spec.title || spec.caption);
  const xLabel = escapeXml(spec.xLabel);
  const yLabel = escapeXml(spec.yLabel);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${label}"><title>${label}</title><line x1="${padL}" y1="${padT}" x2="${padL}" y2="${height - padB}" stroke="currentColor" stroke-opacity="0.35"/><line x1="${padL}" y1="${height - padB}" x2="${width - padR}" y2="${height - padB}" stroke="currentColor" stroke-opacity="0.35"/>${marks}<text x="${width - padR}" y="${height - 12}" text-anchor="end" fill="currentColor" font-size="12">${xLabel}</text><text x="12" y="16" fill="currentColor" font-size="12">${yLabel}</text></svg>`;
}
