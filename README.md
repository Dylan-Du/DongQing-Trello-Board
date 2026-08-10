# 东青Trello看板 (DongQing Trello Board)

高颜值本地看板应用，基于 Electron 构建，支持深色/浅色主题、毛玻璃质感、标签管理、子任务、拖拽排序。

## ✨ 特性

- 🎨 **深色暗黑 UI** — 深靛蓝渐变背景，毛玻璃面板，科技简约风
- 🌓 **双主题切换** — 深色/浅色一键切换
- 🏷️ **标签管理** — 可编辑彩色标签，自由增删
- ✅ **子任务** — 卡片内嵌子任务，进度条可视化
- 🖱️ **拖拽排序** — 卡片和列表可拖拽排列
- 💾 **本地存储** — 数据存储在 localStorage，无需后端
- 🖥️ **原生 App** — 基于 Electron，macOS 原生体验

## 📸 截图

> 运行应用后即可看到深色科技风界面

## 📦 安装

### 方法一：下载 DMG 安装包

从 [Releases](https://github.com/Dylan-Du/DongQing-Trello-Board/releases) 页面下载最新版 `东青Trello看板-*.dmg`，双击安装。

### 方法二：源码运行

```bash
# 克隆仓库
git clone https://github.com/Dylan-Du/DongQing-Trello-Board.git
cd DongQing-Trello-Board

# 安装依赖
npm install

# 开发模式运行
npm start

# 打包为 macOS DMG
npm run build
```

## 🛠️ 技术栈

- **前端**：原生 HTML/CSS/JS，毛玻璃 Glassmorphism 设计
- **框架**：Electron 43
- **打包**：electron-builder

## 📁 项目结构

```
├── main.js              # Electron 主进程
├── trello-board.html    # 看板前端（单文件）
├── icon.icns            # macOS 应用图标
├── icon-source.svg      # 图标源文件
└── package.json         # 项目配置
```

## 📄 开源协议

MIT License