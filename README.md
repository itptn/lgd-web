# 乐观点-微服务系统

#### 介绍

{乐观点-前端Web页面}

#### 软件架构

- 采用微服务、前后端分离的模式
- 后端微服务 [lgd-cloud](https://gitee.com/itptn/lgd-cloud.git)
- 前端Web页面 [lgd-web](https://gitee.com/itptn/lgd-web.git)
- 前端管理后台页面 [lgd-admin](https://gitee.com/itptn/lgd-admin.git)

| 框架(组件) | 版本    | 说明                                                           |
| ---------- | ------- | -------------------------------------------------------------- |
| node       | 12.18.2 |
| npm        | 6.14.8  |
| cnpm       | 6.1.1   | npm install -g cnpm --registry=https://registry.npm.taobao.org |
| vue/cli    | 4.5.8   |
| yarn       | 1.22.10 | cnpm install -g yarn tyarn                                     |
| umi        | 3.2.24  | umi ui port:3000                                               |

#### 开发日志

- 2020-11-06
- [x] 封装 umi-request 工具类，统一处理与后端交互请求
- [x] 登录功能
- 2020-11-04
- [x] 前端Web页面空页面提交

#### 开发过程

- cd workspate
- tyarn create umi lgd-web
- select ant-design-pro
- select Pro V5
- tyarn install
- tyarn run start
