# Portfolio Project Memory

> Last updated: 2026-06-10  
> Workspace: `C:\Users\xxxbz\Desktop\作品集`

新开 Codex 对话时，请先读取本文件，再检查当前代码和用户最新修改。不要假设
本文件之后代码没有变化。

## 1. Project Goal

这是蔡佳妍的中英双语个人设计作品集网站。网站需要：

- 极简、活泼，但整体保持克制的编辑设计感。
- 使用黑色背景、米白正文与少量荧光绿。
- 首页以单列项目流展示：项目名称、图片、简介。
- 项目详情页采用类似公众号文章的连续图文阅读方式。
- 项目开头支持大图轮播；有视频时优先显示视频。
- 新项目通过规范化 MDX 文档维护，不需要修改页面组件。

## 2. Technical Stack

- Astro 6
- TypeScript
- MDX content collections
- Astro image optimization
- Static output
- Sitemap and Vercel configuration

主要目录：

```text
src/content/projects/zh/       中文项目文档
src/content/projects/en/       英文项目文档
src/content/archive/           Archive 数据
src/assets/projects/           项目图片
src/components/                页面组件
src/styles/global.css          全站样式
project-template.mdx           新项目模板
```

## 3. Current Visual Direction

- 页面背景：`#080808`
- 正文：`#f4f4ef`
- 辅助文字：`#92928d`
- 荧光绿：`#ACFF3F`
- 字体统一使用思源黑体字体栈：

```css
"Source Han Sans SC",
"Noto Sans CJK SC",
"Noto Sans SC",
"Microsoft YaHei",
sans-serif
```

参考方向来自 `https://dinehq.com/work/`：

- 窄内容列
- 大留白
- 单列项目记录
- 胶囊形导航
- 清晰的标题、图片、简介层级

## 4. Homepage

首页路由：

- 中文：`/zh/`
- 英文：`/en/`

项目按 `order` 排序。每条项目包含：

1. 序号、标题、年份
2. 项目封面
3. 项目简介
4. 媒介信息

首页组件：

- `src/pages/[lang]/index.astro`
- `src/components/ProjectCard.astro`

## 5. Project Detail Page

详情页组件：

- `src/pages/[lang]/projects/[slug].astro`
- `src/components/ProjectCarousel.astro`
- `src/components/MediaFigure.astro`

详情页顺序：

1. 项目编号、标题、副标题
2. 年份、媒介、团队
3. 视频或大图轮播
4. 项目摘要
5. 连续 MDX 图文正文
6. 下一个项目导航

正文阅读宽度约 `720px`，大图最大容器约 `1120px`。

项目标题与副标题间距已经加大。下一个项目标题已缩小为小标题层级。

引用文字统一样式：

- 无绿色背景
- 左侧 `4px` 荧光绿竖线
- 字号和普通正文一致

## 6. Carousel and Video

轮播支持：

- 左右箭头
- 计数
- 桌面端右侧垂直缩略图
- 移动端底部横向缩略图
- 点击缩略图切换

有 `videoUrl` 时：

- 视频作为第一项
- YouTube 使用隐私增强嵌入
- 其他视频链接使用封面并打开外部页面

《倒置舞台》视频：

```yaml
videoUrl: "https://youtu.be/UBROkMg5aL8"
```

## 7. Content Management

新项目从根目录的 `project-template.mdx` 开始。

复制到：

```text
src/content/projects/zh/new-project.mdx
```

一个中文项目文档即可生成中英文路由。英文文档缺失时，英文路由回退到中文。
之后可以在 `src/content/projects/en/` 添加具有相同 `translationKey` 的英文文档。

主要 frontmatter：

```yaml
lang: zh
slug: new-project
translationKey: new-project
order: 5
title: 项目名称
subtitle: 一句话副标题
summary: 首页简介和详情页导语
year: "2026"
medium: 书籍设计 / 交互设计
team:
  - 蔡佳妍
cover: "../../../assets/projects/new-project/cover.jpg"
gallery:
  - "../../../assets/projects/new-project/hero-01.jpg"
accent: "#ACFF3F"
status: published
temporaryAssets: false
videoUrl: "https://youtu.be/VIDEO_ID"
```

字段说明：

- `cover`：首页封面，也是轮播中的第一张图片。
- `gallery`：轮播中的其他图片。
- `videoUrl`：可选；存在时视频优先。
- `order`：项目排序。
- `status: draft`：隐藏项目。
- `status: published`：发布项目。
- `temporaryAssets: true`：显示临时素材提示。

## 8. Adding Body Images

项目图片放在：

```text
src/assets/projects/<project-slug>/
```

建议使用小写英文文件名，例如：

```text
stage-working-01.jpg
process-02.png
exhibition-view.jpg
```

在 MDX 中导入：

```mdx
import MediaFigure from "../../../components/MediaFigure.astro";
import working from "../../../assets/projects/inverted-stage/working.png";
```

插入普通图片：

```mdx
<MediaFigure
  src={working}
  alt="迎新晚会后台视角"
  caption="舞台工作照片"
/>
```

插入宽图：

```mdx
<MediaFigure
  src={working}
  alt="迎新晚会后台视角"
  caption="舞台工作照片"
  wide
/>
```

`wide` 只控制容器宽度，不会将竖图变成横图，也不会裁切图片。

所有 `<MediaFigure />` 必须使用自闭合标签。错误写法：

```mdx
<MediaFigure src={working} alt="..." >
```

正确写法：

```mdx
<MediaFigure src={working} alt="..." />
```

全局图片已设置 `height: auto`，确保 Astro 图片保持原始宽高比。

## 9. Current Inverted Stage Project

中文文档：

```text
src/content/projects/zh/inverted-stage.mdx
```

英文文档：

```text
src/content/projects/en/inverted-stage.mdx
```

图片目录：

```text
src/assets/projects/inverted-stage/
```

当前包含：

- `cover.jpg`
- `working.png`
- `marks.jpg`
- `mechanism.png`
- `vr.jpg`

用户在 2026-06-10 更新了中文版内容，包括：

- 新章节“背面视角的舞台”
- 修改媒介为“交互装置 / XR / 空间叙事”
- 新增 `working.png`
- 修改项目正文和引用文字

## 10. Local Development

日常编辑必须使用开发模式：

```powershell
npm run dev
```

当前本地地址：

```text
http://127.0.0.1:4321/zh/
```

开发模式会监听 MDX 和图片修改，保存后自动更新。

不要在日常内容编辑时使用 `npm run preview`。Preview 只读取最后一次构建生成的
`dist`，刷新不会重新编译 MDX。

正式验证：

```powershell
npm run check
npm run build
```

本机可能无法直接找到 `npm` 或 `node`。可使用：

```text
C:\Users\xxxbz\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe
```

Astro CLI：

```text
.\node_modules\astro\bin\astro.mjs
```

## 11. Common Problems

### Saved MDX but page did not update

检查 4321 端口是否运行 `astro dev`，而不是 `astro preview`。

### Page shows MDXError

通常是：

- `<MediaFigure>` 没有写成 `/>`
- 导入的图片文件不存在
- frontmatter 缩进错误
- 图片路径相对于 MDX 文档不正确

### Image looks vertically stretched

图片应保持 `height: auto`。`wide` 只增加容器宽度。

### Imported image does not exist

先确认文件确实放在对应项目目录，并且扩展名完全一致，例如 `.png` 和 `.jpg`
不能混用。

## 12. Validation Status

最近一次完整验证：

- Astro check：通过
- Astro static build：通过
- 生成 16 个页面
- 中英文路由可用
- 视频优先轮播可用
- 缩略图数量与媒体数量一致
- 开发模式热更新可用

## 13. Next Conversation Instructions

新对话可直接告诉 Codex：

```text
请先读取 C:\Users\xxxbz\Desktop\作品集\PROJECT_MEMORY.md，
然后检查当前工作区状态，继续帮我修改作品集网站。
```

修改前应继续遵循：

- 先读取用户最新修改，不覆盖用户内容。
- 视觉修改尽量全项目统一，而不是只修一个页面。
- 内容编辑保持 MDX 驱动。
- 修改后运行 Astro check/build。
- 重要前端改动使用浏览器实际检查。
