# 网站

这个网站使用 [Docusaurus](https://docusaurus.io/) 构建，这是一个现代化的静态网站生成器。

## 安装依赖

```bash
yarn
```

## 本地开发

```bash
yarn start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改会实时反映，无需重新启动服务器。

## 构建生产版本

```bash
yarn build
```

此命令将静态内容生成到 `build` 目录中，可以使用任何静态内容托管服务进行部署。

## 部署

使用 SSH 部署：

```bash
USE_SSH=true yarn deploy
```

不使用 SSH 部署：

```bash
GIT_USER=<您的 GitHub 用户名> yarn deploy
```

如果您使用 GitHub Pages 托管，此命令是一种便捷的方式来构建网站并推送到 `gh-pages` 分支。
