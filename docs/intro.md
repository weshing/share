---
sidebar_position: 1
---

# 教程简介

让我们在**5分钟**内了解 **share**。

## 快速开始

开始**创建一个新站点**。

或者**立即试用 share**，访问 **[weshing.com](https://github.com/weshing/share)**。

### 环境要求

- [Node.js](https://nodejs.org/en/download/) 20.0 或更高版本：
  - 安装 Node.js 时，建议勾选所有与依赖项相关的复选框。

## 生成新站点

使用**经典模板**生成新的 share 站点。

运行以下命令后，经典模板将自动添加到您的项目中：

```bash
npm init docusaurus@latest share classic
```

您可以在命令提示符、Powershell、终端或代码编辑器的集成终端中输入此命令。

该命令还会安装运行 share 所需的所有依赖项。

## 启动您的站点

运行开发服务器：

```bash
cd share
npm run start
```

`cd` 命令用于切换工作目录。要使用新创建的 share 站点，您需要将终端导航到该目录。

`npm run start` 命令会在本地构建您的网站并通过开发服务器提供服务，您可以在 http://localhost:3000/ 上查看。

打开 `docs/intro.md`（本页）并编辑一些行：网站会**自动重新加载**并显示您的更改。
