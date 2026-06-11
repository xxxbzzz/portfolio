import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, "")
  }),
  schema: ({ image }) =>
    z.object({
      lang: z.enum(["zh", "en"]),
      slug: z.string(),
      translationKey: z.string(),
      order: z.number().int().positive(),
      title: z.string(),
      subtitle: z.string(),
      summary: z.string(),
      year: z.string(),
      medium: z.string(),
      team: z.array(z.string()).default([]),
      cover: image(),
      gallery: z.array(image()).default([]),
      accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
      status: z.enum(["published", "draft"]).default("published"),
      temporaryAssets: z.boolean().default(false),
      videoUrl: z.string().url().optional()
    })
});

const archive = defineCollection({
  loader: glob({ base: "./src/content/archive", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int().positive(),
      titleZh: z.string(),
      titleEn: z.string(),
      category: z.enum([
        "book",
        "poster",
        "uiux",
        "social",
        "photography",
        "moving-image",
        "installation",
        "identity",
        "graphic",
        "product"
      ]),
      year: z.string(),
      image: image(),
      gallery: z.array(image()).default([]),
      summaryZh: z.string().optional(),
      summaryEn: z.string().optional(),
      hideFromArchive: z.boolean().default(false),
      temporaryAsset: z.boolean().default(false),
      videoUrl: z.string().url().optional()
    })
});

export const collections = { projects, archive };
