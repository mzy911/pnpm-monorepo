---
name: Progress
route: /Progress
order: 10
sidebar: true
---

## 用法

### 基本用法

```jsx
import { Progress } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Progress percent={50} />
      <br />
      <Progress percent={20} themeColor="#888" />
      <br />
      <Progress percent={10} themeColor="red" />
      <br />
      <Progress percent={88} themeColor="green" />
    </div>
  );
};
```

### 隐藏进度文本

```jsx
import { Progress } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Progress percent={20} themeColor="#888" />
      <br />
      <Progress percent={50} hiddenText />
    </div>
  );
};
```

### 设置进度控件宽度

```jsx
import { Progress } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Progress percent={20} width={200} hiddenText />
      <br />
      <Progress percent={20} width={400} hiddenText themeColor="red" />
      <br />
      <Progress percent={40} width={300} hiddenText themeColor="green" />
    </div>
  );
};
```

### 设置进度状态阈值

```jsx
import { Progress } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Progress
        percent={19}
        statusScope={[
          [20, 'red'],
          [50, 'orange'],
          [80, '#06f'],
        ]}
      />
      <br />
      <Progress
        percent={40}
        statusScope={[
          [20, 'red'],
          [50, 'orange'],
          [80, '#06f'],
        ]}
      />
      <br />
      <Progress
        percent={90}
        statusScope={[
          [20, 'red'],
          [50, 'orange'],
          [80, '#06f'],
        ]}
      />
    </div>
  );
};
```

## API 文档

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| themeColor | 进度条的颜色 | string | '#06f' |
| percent | 进度值百分比 | number |  |
| autoHidden | 是否进度到 100%时自动消失 | bool | false |
| hiddenText | 是否影藏进度条文本 | bool | false |
| width | 进度条的宽度 | string | number | 320 |
| textColor | 进度文本颜色 | string | '#666' |
| statusScope | 状态阈值,分别设置不同进度范围的进度条颜色,最大允许设置 3 个值, 为一个二维数组 | array |  |
