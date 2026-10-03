import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const projectSlugs = ['drenering', 'terrasse', 'plen', 'male-huset', 'stottemur', 'gravearbeid', 'traer'] as const;

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

const guider = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guider' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    project: z.enum(projectSlugs),
    updated: z.coerce.date(),
    difficulty: z.enum(['Enkel', 'Middels', 'Krevende']),
    timeEstimate: z.string().optional(),
    summary: z.string(),
    equipment: z.array(z.string()).default([]),
    steps: z.array(z.object({ name: z.string(), text: z.string() })).optional(),
    faq,
  }),
});

const prosjekter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prosjekter' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string(),
    order: z.number(),
    description: z.string(),
    lead: z.string(),
    customerSays: z.string(),
    season: z.string(),
    equipment: z.array(z.object({ name: z.string(), note: z.string() })),
    kit: z.array(z.string()),
    butler: z.array(z.string()),
    notDiy: z.array(z.string()).default([]),
    faq,
  }),
});

export const collections = { guider, prosjekter };
