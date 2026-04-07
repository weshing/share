# 安装 NewTab

# 1. 克隆仓库

在目录 GitHub/image中运行

```bash
./clone.sh weshing git@github.com:weshing/NewTab.git 
```

## NewTab项目构建指南

### 项目结构
```
NewTab/
├── src/               # 源代码
├── dist/              # 构建产物
│   ├── extension/    # 浏览器扩展包
│   └── web/           # 网页版
├── webpack.common.js  # 通用webpack配置
├── webpack.dev.js     # 开发环境配置
├── webpack.prod.js    # 生产环境配置
└── package.json      # 项目配置
```

### 构建步骤

```bash
# 1. 安装依赖
npm install

# 2. 开发模式（实时预览）
npm start

# 3. 生产构建（生成扩展包）
npm run build
```

### 构建产物
- **扩展包**: `dist/extension/NewTab_7.6.0.zip`
- **网页版**: `dist/web/`

### 用户使用方式
1. 下载zip文件，解压
2. 打开 Chrome → `chrome://extensions/`
3. 开启「开发者模式」
4. 点击「加载已解压的扩展程序」
5. 选择解压后的文件夹

