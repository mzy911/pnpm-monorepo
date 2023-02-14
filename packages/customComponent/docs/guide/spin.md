---
name: Spin
route: /Spin
order: 12
sidebar: true
---

## 用法

### 基本用法

```jsx
import { Spin } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Spin />
    </div>
  );
};
```

### 线性加载

```jsx
import { Spin } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Spin type="line" />
    </div>
  );
};
```

### 改变颜色

```jsx
import { Spin } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Spin bgColor="orange" />
    </div>
  );
};
```

## API 文档

| 参数        | 说明                                  | 类型   | 默认值 |
| --- | --- | --- | --- |
| isLoading   | 加载中状态，默认为 true               | bool   |        |
| loadingText | 加载状态的文本                        | string |        |
| hiddenText  | 是否隐藏加载状态的文本                | bool   |        |
| type        | spin 的类型，目前有 ball 和 line 两种 | string |        |
| bgColor     | 加载动画颜色                          | string |        |
