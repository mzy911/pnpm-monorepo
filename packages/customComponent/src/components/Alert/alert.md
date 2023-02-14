---
name: Alert
route: /Alert
order: 1
sidebar: true
---



## 用法

```jsx
  import { Alert } from '@mzy123/customcomponentlib'

  export default () => {
    return (
      <div>
        <Alert message="温馨提示：您的小票已出，快来火车站获取吧～" />
      </div>
    )
  }
```

## API文档
|  参数  |  说明  |  类型  |  默认值  |
|  ---   |  ---  |  ---  |  ---  |
|  style  |  更改Alert样式  |  object  |  |
|  closable  |  是否显示关闭按钮, 默认不显示  |  bool  |  false  |
|  closeText  |  自定义关闭按钮  |  string|reactNode  |  'x'  |
|  message  |  警告提示内容  |  string  |    |
|  description  |  警告提示的辅助性文字  |  string  |    |
|  type  |  警告的类型  |  string  |   'warning' |
|  onClose  |  关闭时触发的事件  |  func  |    |
