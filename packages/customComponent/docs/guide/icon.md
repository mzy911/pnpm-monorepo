---
name: Icon
route: /Icon
order: 7
sidebar: true
---

## 用法

### 基本用法

```jsx
import { Icon } from '@mzy123/customcomponentlib';
export default () => {
  return (
    <div>
      <Icon type="FaBeer" />
      <Icon type="FaAccessibleIcon" size="24px" />
      <Icon type="FaAlipay" size="24px" style={{ color: 'red' }} />
      <Icon type="FaBeer" size="24px" style={{ marginLeft: '15px' }} />
      <Icon
        type="FaAccessibleIcon"
        size="24px"
        style={{ marginLeft: '15px' }}
      />
      <Icon type="FaAlipay" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaAngellist" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaAtlassian" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaBitbucket" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaDropbox" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaFreebsd" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaGithub" size="24px" style={{ marginLeft: '15px' }} />
      <Icon
        type="FaHackerNewsSquare"
        size="24px"
        style={{ marginLeft: '15px' }}
      />
      <Icon
        type="FaHotjar"
        size="24px"
        style={{ marginLeft: '15px', color: 'red' }}
      />
    </div>
  );
};
```

<!-- 更多图标可以在如下界面获得 -->
<!-- <iframe width="100%" height="1000px" style={{border: 'none'}} src="https://react-icons.netlify.com/#/icons/fa" /> -->

## API 文档

| 参数     | 说明                  | 类型   | 默认值 |
| --- | --- | --- | --- |
| type     | icon 类型             | string |        |
| size     | icon 大小(px，lg，xs) | string |        |
| rotation | 旋转角度              | number |        |
| style    | 图标样式              | object |        |
