import type { CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;

export const sortProjectsByRank = (projects: ProjectEntry[]) =>
  projects.sort((left, right) => left.data.rank - right.data.rank);

export const isProjectPublished = (project: ProjectEntry) => project.data.published;

export const isProjectVisibleInArchive = (project: ProjectEntry) =>
  isProjectPublished(project) && project.data.showInArchive;

export const isProjectVisibleOnHome = (project: ProjectEntry) =>
  isProjectPublished(project) && (project.data.showOnHome ?? project.data.featured);
