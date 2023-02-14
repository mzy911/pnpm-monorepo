---
name: Switch
route: /Switch
order: 13
sidebar: true
---

## 使用

### 基本用法

```jsx
import { Switch } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Switch /> <br />
      <br />
      <Switch checked />
    </div>
  );
};
```

### 控制大小

```jsx
import { Switch } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Switch size="small" /> <br />
      <br />
      <Switch /> <br />
      <br />
      <Switch size="large" />
    </div>
  );
};
```

### 开关文本

```jsx
import { Switch } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Switch onText="开" offText="关" />
    </div>
  );
};
```

## API 文档

| 参数     | 说明               | 类型   | 默认值    |
| --- | --- | --- | --- |
| onClick  | 对外暴露的点击事件 | func   |           |
| checked  | 是否被选中         | bool   | false     |
| disabled | 是否被禁用         | bool   | false     |
| offText  | 关闭状态的文本     | string | ''        |
| onText   | 开启状态的文本     | string | ''        |
| size     | 组件的尺寸         | string | 'default' |
