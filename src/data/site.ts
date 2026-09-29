/**
 * Identity, navigation, and other personal content.
 * Replace every PLACEHOLDER before treating the site as finished.
 * Do not add facts Derek has not supplied.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'instagram' | 'facebook' | 'github';
}

export const site = {
  name: 'Derek Jackson',
  url: 'https://dqjackso.github.io',
  tagline:
    'An out-of-the-box thought leader, who is mathematically rigorous and technically proficient, but makes concepts approachable in a human centered way.',
  description:
    'An out-of-the-box thought leader, who is mathematically rigorous and technically proficient, but makes concepts approachable in a human centered way.',
  /**
   * DRAFT BIO for Derek to review.
   * Drawn from the resume summary and his positioning. No phone number or email.
   */
  bio: 'Derek has spent 10+ years building operating infrastructure where none existed, across military special operations, federal contracting, cybersecurity, and financial services. He takes an ambiguous mandate through to a measurable outcome: a headquarters stood up in 7 days, a company stabilized in 14 days, and a business-to-government contracting operation generating revenue in year one. He keeps the work mathematically rigorous and technically exact, and he makes the ideas approachable.',
  /**
   * Visible icon row. One Facebook icon, pointing at the personal profile.
   * The second Facebook profile is only in sameAs.
   */
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dqjackso/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/dqjackso/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/dqjackso.personal', icon: 'facebook' },
    { label: 'GitHub', href: 'https://github.com/dqjackso', icon: 'github' },
  ] satisfies SocialLink[],
  /** Every public profile, including the second Facebook profile. */
  sameAs: [
    'https://www.linkedin.com/in/dqjackso/',
    'https://www.instagram.com/dqjackso/',
    'https://www.facebook.com/dqjackso.personal',
    'https://www.facebook.com/dqjackso.irl/',
    'https://github.com/dqjackso',
  ],
  nav: [
    { href: '/work/', label: 'Work' },
    { href: '/blog/', label: 'Blog' },
  ],
} as const;
