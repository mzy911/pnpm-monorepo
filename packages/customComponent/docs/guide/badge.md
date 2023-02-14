---
name: Badge
route: /Badge
order: 2
sidebar: true
---

## 用法

### 默认用法

```jsx
import { Badge } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Badge count={99}>react</Badge>
    </div>
  );
};
```

### 设置 overflowCount，展示封顶的数字

```jsx
import { Badge } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Badge count={129} overflowCount={99}>
        react+vue
      </Badge>
      <br />
      <br />
      <Badge
        count={129}
        overflowCount={99}
        style={{ backgroundColor: 'green' }}
      >
        Node
      </Badge>
    </div>
  );
};
```

### 只展示一个小圆点

```jsx
import { Badge } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Badge count={1} dot>
        javascript
      </Badge>
    </div>
  );
};
```

### 展示指示状态

```jsx
import { Badge } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Badge status="success"></Badge>
      <Badge status="warning"></Badge>
      <Badge status="error"></Badge>
      <Badge status="processing"></Badge>
    </div>
  );
};
```

### 展示指示状态

```jsx
import { Badge } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Badge status="success" text="成功"></Badge>
      <br />
      <Badge status="error" text="错误"></Badge>
      <br />
      <Badge status="processing" text="进行中"></Badge>
      <br />
      <Badge status="warning" text="警告"></Badge>
    </div>
  );
};
```

## API 文档

| 参数          | 说明                                | 类型    | 默认值 |
| --- | --- | --- | --- |
| style         | 更改 badge 样式                     | object  |        |
| color         | 自定义小圆点的颜色                  | string  | 'red'  |
| count         | 展示的数字                          | number  | 0      |
| dot           | 不展示数字,只展示一个小圆点         | bool    | false  |
| offset        | 设置状态点的偏移                    | array   |        |
| overflowCount | 展示封顶的数字                      | number  |        |
| showZero      | 当数值为 0 时是否展示 Badge         | bool    | false  |
| status        | 设置 badge 为状态点, 类型有 success | warning | error  | default | processing | string | 'default' |
| text          | 当设置 status 时状态点的文本        | string  |        |
