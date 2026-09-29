import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      sample: z.boolean().default(false),
      draft: z.boolean().default(false),
    })
    .refine((data) => !data.image || Boolean(data.imageAlt), {
      message: 'imageAlt is required when image is set',
      path: ['imageAlt'],
    }),
});

export const collections = { blog };
