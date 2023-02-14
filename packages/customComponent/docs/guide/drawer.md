---
name: Drawer
route: /Drawer
order: 5
sidebar: true
---

## 用法

### 基本用法

```jsx
import { Drawer } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <div>点击右上角x关闭，或者点击蒙层关闭</div>
      <Drawer visible={true} />
    </div>
  );
};
```

## API 文档

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 抽屉是否可见 | bool | false |
| closable | 是否显示右上角的关闭按钮 | bool | true |
| destroyOnClose | 关闭时销毁里面的子元素 | bool | false |
| getContainer | 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom | HTMLElement | document.body |
| maskClosable | 点击蒙层是否允许关闭抽屉 | bool | true |
| mask | 是否展示遮罩 | bool | true |
| drawerStyle | 用来设置抽屉弹出层样式 | object |  |
| width | 弹出层宽度 | number | string | '300px' |
| zIndex | 抽屉层级 | number | 10 |
| placement | 抽屉方向 | string | 'right' |
| onClose | 点击关闭时的回调 | func |  |
