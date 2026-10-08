import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

function byDate(posts: Post[]): Post[] {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Published posts: the blog index, tag pages, and RSS. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return byDate(posts);
}

/**
 * Every post the build can render, including drafts. Drafts stay off the
 * listing, the feed, and the sitemap, and the post page is marked noindex.
 */
export async function getRenderablePosts(): Promise<Post[]> {
  return byDate(await getCollection('blog'));
}

export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
