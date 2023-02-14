---
name: Tag
route: /Tag
order: 14
sidebar: true
---

## 使用

### 基本用法

```jsx
import { Tag } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Tag color="#06c">标签</Tag>
      <Tag color="red">标签</Tag>
      <Tag color="orange">标签</Tag>
      <Tag>标签</Tag>
      <br />
      <Tag color="green" closable>
        标签
      </Tag>
      <Tag closable>标签</Tag>
    </div>
  );
};
```

### 关闭时的回调

```jsx
import { Tag } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Tag
        color="green"
        closable
        onClose={() => {
          alert('tag关闭');
        }}
      >
        标签
      </Tag>
    </div>
  );
};
```

## API 文档

| 参数     | 说明                          | 类型   | 默认值    |
| --- | --- | --- | --- |
| closable | 是否可关闭                    | bool   | false     |
| onClose  | 标签关闭时的回调              | func   |           |
| color    | 标签的颜色,不设置则为默认颜色 | string | '#fafafa' |
