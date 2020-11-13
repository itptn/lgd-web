import React from 'react';
import { Card, Alert, Typography } from 'antd';
import styles from './index.less';

export default (): React.ReactNode => (
  <div className={styles.pre}>
    <Card>
      <Alert
        message="更快更强的重型组件，已经发布。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        高级表格{' '}
        <a
          href="https://procomponents.ant.design/components/table"
          rel="noopener noreferrer"
          target="__blank"
        >
          欢迎使用
        </a>
      </Typography.Text>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        高级布局{' '}
        <a
          href="https://procomponents.ant.design/components/layout"
          rel="noopener noreferrer"
          target="__blank"
        >
          欢迎使用
        </a>
      </Typography.Text>
    </Card>
  </div>
);
