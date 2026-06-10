# Cai Jiayan Portfolio

Astro + MDX bilingual portfolio for Cai Jiayan.

## Local development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
```

## Content structure

- `src/content/projects/zh/`: Chinese project pages
- `src/content/projects/en/`: English project pages
- `src/content/archive/`: Archive cards shared by both languages
- `src/assets/projects/`: Project media
- `src/assets/archive/`: Archive media

To add a project, duplicate `project-template.mdx`, move it into
`src/content/projects/zh/`, and update the frontmatter and article content.
One Chinese document is enough to publish a project on both routes; the English
route falls back to the Chinese entry until an optional English file with the
same `translationKey` is added.

Set `status: published` when the project is ready. `cover` controls the project
list image, while `gallery` controls the carousel at the top of the detail page.
The content schema in `src/content.config.ts` stops the build when required
fields are missing or invalid.

Set `temporaryAssets: true` while a project contains replaceable images. Image
imports live inside MDX, so a replacement only requires updating the referenced
file or import path; page components do not need to change.

## Deployment

Import this folder as a new Vercel project. The site is fully static and needs
no adapter or environment variables. Before publishing a permanent domain,
update the `site` value in `astro.config.mjs`.
