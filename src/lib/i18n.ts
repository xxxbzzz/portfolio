export type Lang = "zh" | "en";

export const labels = {
  zh: {
    projects: "项目",
    archive: "归档",
    info: "关于",
    featured: "精选项目",
    selectedWork: "Selected work / 精选创作",
    archiveTitle: "按媒介浏览",
    archiveIntro: "一些短项目、视觉实验与仍在生长的碎片。",
    all: "全部",
    readProject: "进入项目",
    nextProject: "下一个项目",
    temporary: "部分图片为临时版本",
    role: "团队",
    year: "年份",
    medium: "媒介",
    skipIntro: "跳过开场",
    statement:
      "我在出版、影像与交互之间工作，关注那些被界面、秩序与观看方式隐藏起来的声音。",
    infoBody:
      "蔡佳妍，跨媒介设计与创作者。我的实践从编辑设计出发，延伸到交互、动态影像与空间体验。",
    email: "联系邮箱"
  },
  en: {
    projects: "Projects",
    archive: "Archive",
    info: "Info",
    featured: "Featured Projects",
    selectedWork: "Selected work",
    archiveTitle: "Browse by medium",
    archiveIntro: "Short projects, visual experiments, and fragments still in motion.",
    all: "All",
    readProject: "View project",
    nextProject: "Next project",
    temporary: "Some images are temporary",
    role: "Team",
    year: "Year",
    medium: "Medium",
    skipIntro: "Skip intro",
    statement:
      "I work across publishing, moving image and interaction, tracing the voices hidden by interfaces, systems and ways of seeing.",
    infoBody:
      "Cai Jiayan is a cross-media designer and maker. Her practice begins with editorial design and extends into interaction, moving image and spatial experience.",
    email: "Email"
  }
} as const;

export const categories = {
  book: { zh: "书籍", en: "Books" },
  poster: { zh: "海报", en: "Posters" },
  uiux: { zh: "UI/UX", en: "UI/UX" },
  social: { zh: "新媒体", en: "Social" },
  photography: { zh: "摄影", en: "Photography" },
  "moving-image": { zh: "影像", en: "Moving Image" },
  installation: { zh: "装置", en: "Installation" },
  identity: { zh: "视觉识别", en: "Identity" }
} as const;

export function isLang(value: string | undefined): value is Lang {
  return value === "zh" || value === "en";
}

export function swapLang(pathname: string, lang: Lang) {
  return pathname.replace(/^\/(zh|en)(?=\/|$)/, `/${lang}`);
}
