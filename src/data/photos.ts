import aspens from '../assets/derek-forest-aspens.jpg';
import headshot from '../assets/derek-headshot-suit.jpg';
import plaid from '../assets/derek-portrait-plaid.jpg';

/**
 * Photographs Derek supplied. Files in src/assets are optimized at build time
 * and are not copied into the site as originals.
 *
 * The bowhunting frames were not used. The aspen picture is the outdoor image.
 */
export const photos = {
  hero: {
    src: headshot,
    alt: 'Derek Jackson, with short brown hair, a beard, and glasses, wearing a dark suit, white shirt, and navy tie, standing indoors in front of a bright window.',
    caption: 'Derek Jackson in a dark suit and navy tie.',
    position: 'center 22%',
  },
  about: {
    src: plaid,
    alt: 'Derek Jackson smiling, with glasses and a beard, wearing a red and blue plaid shirt against a dark wall.',
    position: 'center 28%',
  },
  editorial: {
    src: aspens,
    alt: 'Derek Jackson standing in tall grass beneath aspen trees, wearing a light shirt and khaki pants, with sunlight flaring through the leaves.',
    caption: 'Standing in tall grass under aspen trees.',
    position: 'center 38%',
  },
};
