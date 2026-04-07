// @ts-check
// `@type` JSDoc 注释允许编辑器自动补全和类型检查
// (与 `@ts-check` 配对时)。
// 有多种等效方式声明您的 Docusaurus 配置。
// 参见: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import searchLocal from "@cmfcmf/docusaurus-search-local";

// 这在 Node.js 中运行 - 不要在此处使用客户端代码（浏览器 API、JSX...）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Share",
  tagline: "We are SH Shing",
  favicon: "img/favicon.ico",

  // 未来标志，参见 https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // 提高与即将推出的 Docusaurus v4 的兼容性
  },

  // 在此设置您站点的生产 URL
  url: "https://sh.shing.cc",
  // 设置您的站点所在的 /<baseUrl>/ 路径名
  // 对于 GitHub pages 部署，通常是 '/<projectName>/'
  baseUrl: "/",

  // GitHub pages 部署配置。
  // 如果您不使用 GitHub pages，则不需要这些。
  organizationName: "weshing", // 通常是您的 GitHub 组织/用户名。
  projectName: "share", // 通常是您的仓库名称。

  onBrokenLinks: "throw",

  // 即使您不使用国际化，也可以使用此字段设置
  // 有用的元数据，如 html lang。例如，如果您的站点是中文，
  // 可能需要将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [
    [
      searchLocal,
      {
        language: ["en", "zh"],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/weshing/share/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "最新文章",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // 请将此更改为您自己的仓库。
          // 删除此行以移除"编辑此页面"链接。
          editUrl: "https://github.com/weshing/share/",
          // 有用的选项，用于强制执行博客最佳实践
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为您项目的社交卡片
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "WeShing",
        logo: {
          alt: "WeShing Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "教程",
          },
          { to: "/blog", label: "博客", position: "left" },
          { type: "docSidebar", sidebarId: "macSidebar", position: "left", label: "mac" },
          { type: "docSidebar", sidebarId: "ubuntuSidebar", position: "left", label: "ubuntu" },
          { type: "docSidebar", sidebarId: "toolSidebar", position: "left", label: "tool" },
          {
            href: "https://github.com/weshing/share",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "教程",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "X",
                href: "https://x.com/",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "博客",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/weshing/share/",
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} WeShing`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
