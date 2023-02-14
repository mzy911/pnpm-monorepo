---
name: Alert
route: /Alert
order: 1
sidebar: true
---

### 基础用法

```jsx
import { Alert, Button } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Alert message="温馨提示：您的小票已出，快来火车站获取吧～" />
    </div>
  );
};
```

### 可关闭

```jsx
import { Alert, Button } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Alert message="可关闭" closable />
    </div>
  );
};
```

### 主题类型

```jsx
import { Alert, Button } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Alert
        message="出票成功：您的小票已出，快来火车站获取吧～"
        type="success"
      />
      <Alert message="出票错误：react错误，返回首页～" type="error" />
      <Alert
        message="出票通知：您的小票已出，快来火车站获取吧～～"
        type="info"
      />
      <Alert message="温馨提示：您的小票已出，快来火车站获取吧～" />
    </div>
  );
};
```

### 配置提示辅助文字

```jsx
import { Alert, Button } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Alert
        message="出票通知"
        description="您的小票已出，快来火车站获取吧～～"
        type="info"
      />
      <Alert
        message="验证成功"
        description="您的代码提交成功，快来火车站获取吧～～"
        type="success"
        closable
      />
    </div>
  );
};
```

## API 文档

| 参数        | 说明                         | 类型   | 默认值    |
| --- | --- | --- | --- |
| style       | 更改 Alert 样式              | object |           |
| closable    | 是否显示关闭按钮, 默认不显示 | bool   | false     |
| closeText   | 自定义关闭按钮               | string | reactNode | 'x' |
| message     | 警告提示内容                 | string |           |
| description | 警告提示的辅助性文字         | string |           |
| type        | 警告的类型                   | string | 'warning' |
| onClose     | 关闭时触发的事件             | func   |           |
