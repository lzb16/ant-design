---
order: 2
title:
  zh-CN: 带 icon 的滑块
  en-US: Slider with icon
---

## zh-CN

滑块左右可以设置图标来表达业务含义。

## en-US

You can add an icon beside the slider to make it meaningful.

```jsx
import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

class IconSlider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className="icon-wrapper">
        <FrownOutlined className={preColorCls} />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <SmileOutlined className={nextColorCls} />
      </div>
    );
  }
}

export default () => <IconSlider min={0} max={20} />;
```

```css
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .ofsicon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 16px;
  line-height: 1;
}

.icon-wrapper .icon-wrapper-active {
  color: rgba(0, 0, 0, 0.45);
}

.icon-wrapper .ofsicon:first-child {
  left: 0;
}

.icon-wrapper .ofsicon:last-child {
  right: 0;
}
```

<style>
  [data-theme="dark"] .icon-wrapper .ofsicon {
    color: rgba(255, 255, 255, 0.25);
  }
  [data-theme="dark"] .icon-wrapper .icon-wrapper-active {
    color: rgba(255, 255, 255, .45);
  }
</style>
