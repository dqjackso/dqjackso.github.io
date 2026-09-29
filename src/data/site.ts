/**
 * Identity, navigation, and other personal content.
 * Replace every PLACEHOLDER before treating the site as finished.
 * Do not add facts Derek has not supplied.
 */

export interface SocialLink {
  label: string;
  /**
   * Set this to a real profile URL to render a link.
   * Leave it unset while the address is unknown.
   */
  href?: string;
  placeholder: string;
}

export const site = {
  name: 'Derek Jackson',
  url: 'https://dqjackso.github.io',
  tagline:
    'An out-of-the-box thought leader, who is mathematically rigorous and technically proficient, but makes concepts approachable in a human centered way.',
  description:
    'An out-of-the-box thought leader, who is mathematically rigorous and technically proficient, but makes concepts approachable in a human centered way.',
  bio: 'PLACEHOLDER: bio from Derek',
  portrait: {
    src: '/placeholders/portrait.svg',
    alt: 'PLACEHOLDER: portrait of Derek Jackson',
    caption: 'PLACEHOLDER: portrait',
    width: 1600,
    height: 1066,
  },
  ogImage: '/og.png',
  ogImageAlt: 'Derek Jackson',
  socials: [
    { label: 'GitHub', placeholder: 'PLACEHOLDER: GitHub profile URL' },
    { label: 'LinkedIn', placeholder: 'PLACEHOLDER: LinkedIn profile URL' },
    { label: 'Email', placeholder: 'PLACEHOLDER: email address' },
  ] satisfies SocialLink[],
  nav: [
    { href: '/work/', label: 'Work' },
    { href: '/blog/', label: 'Blog' },
  ],
} as const;
