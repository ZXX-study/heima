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
    git clone https://github.com/ZXX-study/black-horse-events.git
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
- 添加“记住我”功能
- element-plus最新版中input输入框已没有默认框，需手动添加
- 更改了文章分类和文章管理进行编辑操作后点击叉号会使按钮保存hover状态的问题

## 目录结构
```plaintext
black-horse-events/
├── src/                     # 源码目录
│   ├── assets/              # 静态资源（图片、样式等）
│   ├── api/                 # 管理接口调用
│   ├── components/          # 公共组件
│   ├── views/               # 页面组件
│   │   ├──article/          # 管理文章相关页面
│   │   ├──layout/           # 主体页面
│   │   ├──login/            # 管理登入相关页面
│   │   ├──user/             # 管理用户相关页面
│   ├── router/              # 路由配置
│   ├── store/               # 状态管理
│   ├── api/                 # 接口请求封装
│   ├── utils/               # 工具函数

