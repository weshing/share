---
sidebar_position: 5
---

# 部署您的站点

Docusaurus 是一个**静态网站生成器**（也称为 **[Jamstack](https://jamstack.org/)**）。

它将您的站点构建为简单的**静态 HTML、JavaScript 和 CSS 文件**。

## 构建您的站点

为**生产环境**构建您的站点：

```bash
npm run build
```

静态文件会生成在 `build` 文件夹中。

## 部署您的站点

在本地测试您的生产构建：

```bash
npm run serve
```

`build` 文件夹现在在 [http://localhost:3000/](http://localhost:3000/) 上提供服务。

您现在可以轻松地将 `build` 文件夹部署到**任何地方**，**免费**或费用很低（请阅读**[部署指南](https://docusaurus.io/docs/deployment)**）。
