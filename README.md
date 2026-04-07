# Share 文档站点

基于 [Docusaurus 3.9.2](https://docusaurus.io/) 构建的静态文档网站。

## 功能特性

- 多栏目文档：教程、mac、ubuntu、工具
- 侧边栏支持分类展开/折叠
- 支持目录索引页（generated-index）
- 内置本地搜索（支持中英文）
- 支持暗黑模式

## 目录结构

```
docs/
├── mac/                    # mac 终端优化栏目
│   ├── _category_.json
│   ├── index.md
│   ├── 目录111/
│   │   ├── _category_.json
│   │   ├── ghostty.md
│   │   └── intro.md
│   └── 目录222/
├── ubuntu/                 # Ubuntu 栏目
│   ├── _category_.json
│   ├── index.md
│   ├── 目录2/
│   └── 目录3/
├── tool/                   # 工具栏目
│   ├── _category_.json
│   ├── index.md
│   └── NewTab/
├── 配置说明.md             # 配置说明文档
└── ...
```

## 配置文件说明

### docusaurus.config.js

**路径**: `/Users/molt/github/weshing/share/docusaurus.config.js`

关键配置：
- 第14行: `title` - 网站标题
- 第100-113行: `navbar.items` - 顶部导航栏配置

### sidebars.js

**路径**: `/Users/molt/github/weshing/share/sidebars.js`

定义了所有栏目的侧边栏结构：
- 第4-9行: `tutorialSidebar` - 教程侧边栏
- 第10-30行: `macSidebar` - mac侧边栏  
- 第31-51行: `ubuntuSidebar` - ubuntu侧边栏
- 第52-63行: `toolSidebar` - 工具侧边栏

### _category_.json

各栏目目录下的配置文件，控制显示和排序。

## 常用命令

```bash
npm install          # 安装依赖
npm start            # 本地开发
npm run build        # 构建生产版本
npm run serve        # 预览构建结果
npm run clear        # 清除缓存
```

## 添加新栏目

详细步骤参考 `docs/配置说明.md`

## 参考资料

- [Docusaurus 官方文档](https://docusaurus.io/docs)
- `docs/配置说明.md`