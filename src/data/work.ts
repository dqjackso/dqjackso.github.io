/**
 * Resume-style history and expertise.
 * Every entry is a placeholder slot. Replace the text; do not invent history.
 */

export interface Role {
  dates: string;
  role: string;
  org: string;
  summary: string;
}

export interface SkillGroup {
  area: string;
  items: string[];
}

export const experience: Role[] = [
  {
    dates: 'PLACEHOLDER: dates (entry 1)',
    role: 'PLACEHOLDER: role (entry 1)',
    org: 'PLACEHOLDER: organization (entry 1)',
    summary: 'PLACEHOLDER: what this role involved (entry 1)',
  },
  {
    dates: 'PLACEHOLDER: dates (entry 2)',
    role: 'PLACEHOLDER: role (entry 2)',
    org: 'PLACEHOLDER: organization (entry 2)',
    summary: 'PLACEHOLDER: what this role involved (entry 2)',
  },
  {
    dates: 'PLACEHOLDER: dates (entry 3)',
    role: 'PLACEHOLDER: role (entry 3)',
    org: 'PLACEHOLDER: organization (entry 3)',
    summary: 'PLACEHOLDER: what this role involved (entry 3)',
  },
];

export const skills: SkillGroup[] = [
  {
    area: 'PLACEHOLDER: skill area (group 1)',
    items: [
      'PLACEHOLDER: skill',
      'PLACEHOLDER: skill',
      'PLACEHOLDER: skill',
    ],
  },
  {
    area: 'PLACEHOLDER: skill area (group 2)',
    items: ['PLACEHOLDER: skill', 'PLACEHOLDER: skill'],
  },
];
