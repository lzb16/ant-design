---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

```jsx
import { Progress } from 'antd';

export default () => (
  <>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </>
);
```

<style>
.ofs-progress-circle-wrap,
.ofs-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
