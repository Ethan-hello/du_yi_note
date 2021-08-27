## json

json 是一种传输数据的格式（以对象为样板， 本质上就是对象， 但用途有区别， 对象就是本地用的， josn 是用来传输的）

```json

json
{
    "name" : "deng",
    "age" : 123
}


```


- JSON.parse();    string  -->     json

- JSON.stringify();     json    -->     string

```js
var json = {
    "name" : "deng",
    "age" : 123
}

var jsonStr = JSON.stringify(json);

JSON.parse(jsonStr);

```

## 异步加载js

- js加载的缺点： ；加载工具方法没必要阻塞文档， 过多js 加载会影响页面效率，一旦网速不好， 那么整个网站将等待 js 加载而不进行后续渲染等工作

- 有些工具方法需要按需加载， 用到再加载， 不用不加载


### 异步加载的三种方案

1、defer 异步加载， 但要等到 dom 文档全部解析完才会被执行。只有 IE 能用， 也可以将代码写到内部

```js

<script src="xxxx.js" defer="defer"></script>

```

2、async 异步加载， 加载完就执行， async 只能加载外部脚本， 不能把 js 写在 script 标签里

```js

<script src="xxxx.js" async="async"></script>

```

1.2 执行时也不阻塞页面

3、创建 script, 插入到 DOM 中， 加载完毕后 callBack

```js

var script = document.createElement('script');

script.type = "text/javascript";
script.src = "tool.js";

document.head.appendChild(script);

callBack



```

## js 加载时间线