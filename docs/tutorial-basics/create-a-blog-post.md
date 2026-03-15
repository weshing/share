---
sidebar_position: 3
---

# 创建博客文章

Docusaurus 会为每篇博客文章创建一个**页面**，同时还会创建**博客索引页面**、**标签系统**、**RSS** 订阅等功能。

## 创建您的第一篇文章

在 `blog/2021-02-28-greetings.md` 创建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: 问候！
authors:
  - name: Joel Marcey
    title: Docusaurus 1 联合创始人
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus 维护者
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

恭喜您，您已经完成了第一篇博客文章！

欢迎随意尝试和编辑这篇文章。
```

现在可以在 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings) 访问新的博客文章。
