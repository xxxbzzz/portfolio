import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./i18n";

type Project = CollectionEntry<"projects">;

export async function getLocalizedProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection("projects", ({ data }) => data.status === "published");
  const groups = new Map<string, Project[]>();

  for (const entry of entries) {
    const group = groups.get(entry.data.translationKey) ?? [];
    group.push(entry);
    groups.set(entry.data.translationKey, group);
  }

  return [...groups.values()]
    .map((group) =>
      group.find((entry) => entry.data.lang === lang) ??
      group.find((entry) => entry.data.lang === "zh") ??
      group[0]
    )
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectPaths() {
  const zhProjects = await getLocalizedProjects("zh");
  const enProjects = await getLocalizedProjects("en");

  return [
    ...zhProjects.map((entry) => ({
      params: { lang: "zh", slug: entry.data.slug },
      props: { entry }
    })),
    ...enProjects.map((entry) => ({
      params: { lang: "en", slug: entry.data.slug },
      props: { entry }
    }))
  ];
}
