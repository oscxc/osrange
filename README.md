![osrange](logo.png "osrange")

# 原生js实现的宽度自适应range插件，也可用作进度条

**实现原因**:

  &emsp;1、视频全屏播放时需要一个宽度自适应的进度条

  &emsp;2、浏览器自带的 input range 自定义样式兼容性差

**优点**:

  &emsp;1、样式控制灵活

  &emsp;2、使用简单

  &emsp;3、宽度自适应

  &emsp;4、支持多个实例

**缺点**:

  &emsp;1、需要同时写css

  &emsp;2、样式比较简陋

## 获取和引用 osrange

**简单粗暴方式（必须首先提供的方式）**

  [`下载最新版本`](https://github.com/oscxc/osrange/releases) && 使用标签引用

```
<script src="osrange.js"></script>
```

**npm + CommonJS 方式**

```
npm install osrange
```

```
var osrange = require('osrange');
```

## Usage examples

1、基本使用（宽度固定）：[`examples/basic.html`](examples/basic.html)

2、宽度自适应（百分比）：[`examples/adaptive.html`](examples/adaptive.html)

3、setValue 和 getValue ：[`examples/value.html`](examples/value.html)

4、用作进度条：[`examples/progress.html`](examples/progress.html)

5、多个实例：[`examples/instances.html`](examples/progress.html)


## License

[MIT](LICENSE)

