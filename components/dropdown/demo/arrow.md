---
order: 2
title:
  zh-CN: 箭头
  en-US: Arrow
---

## zh-CN

可以展示一个箭头。

## en-US

You could display an arrow.

```jsx
import { Menu, Dropdown, Button } from 'antd';

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

export default () => (
  <>
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottom" arrow>
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown overlay={menu} placement="topLeft" arrow>
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="top" arrow>
      <Button>top</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topRight" arrow>
      <Button>topRight</Button>
    </Dropdown>
  </>
);
```

```css
#components-dropdown-demo-arrow .ofs-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ofs-row-rtl #components-dropdown-demo-arrow .ofs-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}
```
