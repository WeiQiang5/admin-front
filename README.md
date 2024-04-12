# Vue 3 + TypeScript + Vite + tailwindcss 项目

1. 前后端参考 gin-vue-admin 进行学习
2. 后端使用 nestjs,后面转为 go

# 下载下来的步骤

1.pnpm i 安装依赖
2.pnpm dev 启动项目

# 代码结构

```lua
admin
├── public -- public
|   ├── favicon.ico -- ico
|   └── index.html -- index
├── src   -- 源代码
│   ├── api  -- 所有请求
│   ├── assets  --  照片，样式等静态资源
|   ├── components -- components组件
|   ├── router -- 路由权限
|   ├── enum -- 包含所有的枚举
|   ├── interface -- 包含所有的interface接口
|   ├── store -- store
|   |   ├── modules -- modules
|   |   |   ├── dictionary.js -- 动态路由
|   |   |   ├── router.js -- 路由
|   |   |   └── user.js -- 用户权限菜单过滤
|   |   ├── getters.js -- getters
|   |   └── index.js -- index
|   ├── utils -- utils 组件
|   ├── view -- 主要view代码
|   |   ├── about -- 关于我们
|   |   ├── dashboard -- 面板
|   |   ├── error -- 错误
|   |   ├── example --上传案例
|   |   ├── iconList -- icon列表
|   |   ├── init -- 初始化数据
|   |   |   ├── index -- 新版本
|   |   |   ├── init -- 旧版本
|   |   ├── layout  --  layout约束页面
|   |   |   ├── aside --
|   |   |   ├── bottomInfo -- bottomInfo
|   |   |   ├── screenfull -- 全屏设置
|   |   |   ├── setting    -- 系统设置
|   |   |   └── index.vue -- base 约束
|   |   ├── login --登录
|   |   ├── person --个人中心
|   |   ├── superAdmin -- 超级管理员操作
|   |   ├── system -- 系统检测页面
|   |   ├── systemTools -- 系统配置相关页面
|   |   └── routerHolder.vue -- page 入口页面
│   ├── App.vue  -- 入口页面
│   ├── main.js  -- 入口文件 加载组件 初始化等
│   └── permission.js  -- 跳转
├── vue.config.js  -- vue-cli 配置
└── package.json  -- package.json
```
