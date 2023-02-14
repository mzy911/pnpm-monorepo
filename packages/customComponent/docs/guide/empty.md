---
name: Empty
route: /Empty
order: 6
sidebar: true
---

## 用法

### 基本用法

```jsx
import { Empty } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Empty />;
    </div>
  );
};
```

## API 文档

| 参数      | 说明             | 类型   | 默认值     |
| --- | --- | --- | --- |
| className | 自定义类名       | string |            |
| text      | 空状态文本       | string | '空空如也' |
| src       | 空状态的图片地址 | string |            |
