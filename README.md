# 东青Trello看板 (DongQing Trello Board)

高颜值本地看板应用，基于 Electron 构建，支持多看板管理、深色/浅色主题、毛玻璃质感、标签管理、子任务、拖拽排序、搜索筛选、归档撤销、Markdown 描述、图片附件、日历拖拽改期、命令面板、数据统计和 AI 智能摘要。

## ✨ 特性

### 基础能力
- 🎨 **深色暗黑 UI** — 深靛蓝渐变背景，毛玻璃面板，科技简约风
- 🌓 **双主题切换** — 深色/浅色一键切换
- 🏷️ **标签管理** — 可编辑彩色标签，自由增删
- ✅ **子任务** — 卡片内嵌子任务，进度条可视化
- 🖱️ **拖拽排序** — 卡片和列表可拖拽排列
- 📌 **卡片截止日期** — 支持设置卡片到期时间，逾期高亮提醒
- 💾 **本地存储** — 数据存储在 localStorage，无需后端
- 🖥️ **原生 App** — 基于 Electron，macOS 原生体验

### v1.1 日历 / 统计 / AI
- 📅 **日历视图** — 月/周视图查看卡片截止日期
- 📊 **数据统计** — 多维度 Canvas 图表分析看板数据
- 🤖 **AI 智能摘要** — 基于 DeepSeek/OpenAI 兼容接口的看板内容智能总结与周报

### v1.2 效率与项目管理（参考 Trello/Notion/Teambition）
- 🗂️ **多看板管理** — 顶栏切换器，多项目独立管理，秒切/新建/删除
- 🔍 **搜索与筛选** — 标题/描述实时搜索；按标签、到期日（已过期/今天/7天内/更晚）组合筛选
- 🖱️ **卡片右键菜单** — 复制卡片、移动到其他列表（自动识别完成列表）、归档、删除
- 📋 **列表操作** — 复制列表、归档列表
- 📦 **归档站** — 删除的卡片/列表全部可找回，支持恢复或彻底删除
- ↩️ **全局撤销** — 几乎所有破坏性操作（删除/归档/清空/改期/导入/换背景）Toast 一键撤销，支持 `Ctrl+Z`
- 📝 **Markdown 描述** — 标题/列表/粗斜体/代码块/引用/链接，一键预览（已做 XSS 转义）
- 📎 **图片附件** — 点击上传或 `⌘V` 粘贴截图，缩略图 + 灯箱预览，卡片显示附件角标
- 📅 **日历拖拽改期** — 月/周视图直接拖动卡片到目标日期，改期可撤销
- ⌨️ **命令面板** — `Ctrl+K` 搜索卡片 + 执行命令（切视图/切主题/导入导出/切换看板…）
- 🔧 **全局快捷键** — `Ctrl+F` 搜索、`Ctrl+1/2/3` 切视图、`Ctrl+J` 切主题、`Ctrl+L` 工具菜单、`?` 帮助
- 📤 **备份与恢复** — JSON 导出/导入，旧版数据自动无损迁移
- 🖼️ **自定义背景** — 自选背景图，自动调暗保证可读性

## 📦 安装

### 方法一：下载 DMG 安装包

从 [Releases](https://github.com/Dylan-Du/DongQing-Trello-Board/releases) 页面下载最新版 `DongQing-Trello-Board-*-arm64.dmg`，双击安装。

> 当前版本：**v1.2.1**（Apple Silicon）

> ⚠️ 本应用采用 ad-hoc 签名（未做 Apple 公证）。若首次打开提示"已损坏，无法打开"，请在终端执行以下命令移除隔离属性后再打开：
>
> ```bash
> xattr -cr /Applications/东青Trello看板.app
> ```

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

- **前端**：原生 HTML/CSS/JS，毛玻璃 Glassmorphism 设计，Canvas 图表
- **框架**：Electron 43
- **打包**：electron-builder + hdiutil DMG
- **AI**：DeepSeek / OpenAI 兼容 API（可选）

## 📁 项目结构

```
├── main.js              # Electron 主进程（窗口配置）
├── trello-board.html    # 看板前端（单文件，包含完整 UI/CSS/JS）
├── icon.icns            # macOS 应用图标
├── icon-source.svg      # 图标源文件
├── build/
│   └── entitlements.mac.plist  # macOS 签名权限配置
├── package.json         # 项目配置 & 打包配置
└── LICENSE              # MIT 开源协议
```

## 📄 开源协议

MIT License
