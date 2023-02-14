---
name: Button
route: /Button
order: 3
---

## 用法

### 基本用法

```jsx
import { Button } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Button type="primary">按钮</Button>
      <Button type="warning">按钮</Button>
      <Button type="info">按钮</Button>
      <Button type="pure">按钮</Button>
      <Button type="primary" shape="circle">
        按钮的命运
      </Button>
    </div>
  );
};
```

### 块按钮 block

```jsx
import { Button } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Button block>按钮</Button>
      <br />
      <Button type="primary" block>
        按钮
      </Button>
      <br />
      <Button type="warning" block>
        按钮
      </Button>
      <br />
      <Button type="info" block>
        按钮
      </Button>
      <br />
      <Button type="pure" block>
        按钮
      </Button>
      <br />
      <Button type="primary" shape="circle" block>
        按钮
      </Button>
      <br />
    </div>
  );
};
```

## API 文档

| 参数      | 说明               | 类型         | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名         | string       |        |
| type      | 按钮类型 primary   | warning      | info   | default | pure | string | default |
| shape     | 按钮形状 circle    | radius(默认) | string | radius  |
| onClick   | 对外暴露的点击事件 | func         |        |
