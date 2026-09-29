import { getImage } from 'astro:assets';
import { photos } from '../data/photos';

/** Wide crop of the headshot for Open Graph, Twitter, and Person JSON-LD. */
export function getSocialImage() {
  return getImage({
    src: photos.hero.src,
    width: 704,
    height: 368,
    fit: 'cover',
    position: 'top',
    format: 'jpg',
    quality: 82,
  });
}
