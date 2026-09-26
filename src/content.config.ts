import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Insights collection.
 * One file per language — an article in a language is only published when the
 * file exists, so no page can ship with an untranslated title or body.
 */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    locale: z.enum(['en', 'zh', 'ar']),
    title: z.string().min(6),
    excerpt: z.string().min(20),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    minutes: z.number().int().min(1).max(30).default(4),
    /** Key of the related service/industry, used for cross-links. */
    related: z.string().optional(),
  }),
});

export const collections = { insights };
