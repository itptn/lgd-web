export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/web',
    name: '首页',
    component: './Web',
  },
  {
    path: '/list',
    name: '资讯',
    component: './ListTableList',
  },
  {
    path: '/admin',
    name: '数据',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Web',
      },
    ],
  },
  {
    path: '/',
    redirect: '/web',
  },
  {
    component: './404',
  },
];
