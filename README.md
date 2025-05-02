# 黑马大事件再写

## 目录
1. [项目描述](#项目描述)
2. [黑马大事件原地址](#黑马大事件原地址)
3. [功能](#功能)
4. [环境要求](#环境要求)
5. [安装步骤](#安装步骤)
6. [Bug 改进](#bug-改进)
7. [目录结构](#目录结构)

---

## 项目描述
黑马大事件再写项目是一个现代化的事件管理系统，旨在提供清晰、高效的事件记录与展示体验，适合教学或实战演练使用。

## 黑马大事件原地址
原项目地址：[[点击跳转](https://fe-bigevent-web.itheima.net/login)]([https://your-original-url.com](https://fe-bigevent-web.itheima.net/login))

## 功能
- 用户登录与鉴权
- 事件的增删改查
- 分类管理
- 接口联调
- 响应式前端界面

## 环境要求
- Node.js 16+
- 包管理工具：pnpm
- 浏览器支持：Chrome / Edge / Firefox / Safari 最新版

## 安装步骤
1. 克隆本仓库：
    ```bash
    git clone https://github.com/yourusername/black-horse-events.git
    ```
2. 进入项目目录：
    ```bash
    cd black-horse-events
    ```
3. 安装依赖：
    ```bash
    pnpm install
    ```
4. 启动应用：
    ```bash
    pnpm dev
    ```

## Bug 改进
- 使用 `setup` + `script` 简化组件结构
- 优化接口错误处理
- 修复了分类更新后视图不同步的问题
- 替换过时的 UI 库组件

## 目录结构
```plaintext
black-horse-events/
├── public/                  # 公共资源
│   └── index.html           # HTML 模板入口
├── src/                     # 源码目录
│   ├── assets/              # 静态资源（图片、样式等）
│   ├── components/          # 公共组件
│   ├── views/               # 页面组件
│   ├── router/              # 路由配置
│   ├── store/               # 状态管理
│   ├── api/                 # 接口请求封装
│   ├── utils/               # 工具函数
│   └── main.ts              # 应用入口
├── .env.development         # 开发环境配置
├── .env.production          # 生产环境配置
├── index.html               # 根 HTML 文件
├── package.json             # 项目依赖配置
├── pnpm-lock.yaml           # pnpm 锁定文件
└── vite.config.ts           # 构建工具配置（使用 Vite）
