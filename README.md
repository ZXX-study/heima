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
黑马大事件再写项目是在原黑马程序员所提供的学习代码上的学习在写项目，对部分功能进行了更改优化。使用户体验更加流畅。

## 黑马大事件原地址
原项目地址：[https://fe-bigevent-web.itheima.net/login](https://fe-bigevent-web.itheima.net/login)

## 功能
- 用户登录与鉴权
- 文章事件的增删改查
- 分类管理
- 接口联调

## 环境要求
- Node.js 16+
- 包管理工具：pnpm
- 前端框架：Vue.js

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
