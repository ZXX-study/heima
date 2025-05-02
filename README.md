# 黑马大事件再写

## 目录
1. [项目描述](#项目描述)
2. [功能](#功能)
3. [环境要求](#环境要求)
4. [安装步骤](#安装步骤)
5. [Bug 改进](#bug-改进)
6. [目录结构](#目录结构)

---

## 项目描述
黑马大事件是B站黑马程序员所提供学习的文章管理系统，用户可以方便地进行文章分类与文章的增删改查。本项目是黑马大事件系统的升级版，加入了更多的功能和优化。

## 功能
- 用户注册与登录
- 事件的创建、编辑和删除
- 事件的分类管理

## 环境要求
- 操作系统：Windows/Linux/macOS
- 编程语言：Python 3.x
- 前端框架：Vue.js 

## 安装步骤
1. 克隆本仓库：
    ```bash
    git clone https://github.com/yourusername/black-horse-events.git
    ```
2. 安装依赖：
    ```bash
    cd black-horse-events
    pip install -r requirements.txt
    ```
3. 配置数据库：
    - 修改 `config.py` 文件中的数据库配置。
    - 创建数据库并执行迁移：
    ```bash
    python manage.py migrate
    ```
4. 启动应用：
    ```bash
    python app.py
    ```

## Bug 改进
- 修复了事件列表加载缓慢的问题。
- 改进了用户认证系统，增强了安全性。
- 修复了某些浏览器上显示不完整的问题。

## 目录结构
```plaintext
black-horse-events/
├── app.py                # 启动应用的主文件
├── config.py             # 配置文件
├── requirements.txt      # 项目依赖
├── static/               # 静态文件
│   ├── images/           # 图片
│   ├── css/              # 样式文件
│   └── js/               # JavaScript 文件
├── templates/            # 前端模板文件
│   ├── index.html        # 首页模板
│   └── event_detail.html # 事件详情模板
├── models/               # 数据模型
│   ├── event.py          # 事件模型
│   └── user.py           # 用户模型
├── migrations/           # 数据库迁移文件
└── tests/                # 测试文件
    ├── test_event.py     # 事件功能测试
    └── test_user.py      # 用户功能测试
