---
order: 4
title:
  zh-CN: 迷你
  en-US: Mini size
---

## zh-CN

迷你版本。

## en-US

Mini size pagination.

```jsx
import { Pagination } from 'antd';

function showTotal(total) {
  return `Total ${total} items`;
}

export default () => (
  <>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
);
```

<style>
#components-pagination-demo-mini .ofs-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
