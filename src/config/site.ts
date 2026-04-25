export const siteConfig = {
  name: "Lukas Mateju",
  title: "Lukas Mateju",
  description: "Portfolio site for Lukas Mateju with projects, background, and resume.",
  url: "https://lukasmateju.github.io"
};

export type PageId = "home" | "projects" | "about" | "resume";

export interface PageSettings {
  id: PageId;
  label: string;
  href: string;
  title: string;
  description: string;
  published: boolean;
  showInNav: boolean;
  navOrder: number;
}

export const pageSettings: PageSettings[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    title: "Lukas Mateju",
    description: siteConfig.description,
    published: true,
    showInNav: true,
    navOrder: 0
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    title: "Projects | Lukas Mateju",
    description: "Selected projects and coursework by Lukas Mateju.",
    published: false,
    showInNav: false,
    navOrder: 1
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    title: "About | Lukas Mateju",
    description: "Background and interests for Lukas Mateju.",
    published: false,
    showInNav: false,
    navOrder: 2
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume",
    title: "Resume | Lukas Mateju",
    description: "Resume page for Lukas Mateju.",
    published: true,
    showInNav: true,
    navOrder: 3
  }
];

export const getPageSettings = (id: PageId) => {
  const page = pageSettings.find((item) => item.id === id);

  if (!page) {
    throw new Error(`Missing page settings for "${id}"`);
  }

  return page;
};

export const getPublishedPages = () =>
  pageSettings
    .filter((page) => page.published)
    .sort((left, right) => left.navOrder - right.navOrder);

export const getNavPages = () => getPublishedPages().filter((page) => page.showInNav);

export const getQuickLinks = (ids: PageId[]) =>
  ids
    .map((id) => getPageSettings(id))
    .filter((page) => page.published);
