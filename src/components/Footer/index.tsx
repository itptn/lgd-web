import React from 'react';
import { CodeSandboxSquareFilled } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 乐观点"
    links={[
      {
        key: '后台管理',
        title: <CodeSandboxSquareFilled />,
        href: '/admin',
        blankTarget: true,
      }
    ]}
  />
);
