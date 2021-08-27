## DOM (document object model)

- DOM 定义了表示和修改文档所需的方法。 DOM对象即为宿主对象， 有浏览器厂商定义， 用来操作html 和 xml 功能的一类对象的集合。也有人称DOM是对 html 以及 xml 的标准编程接口


xml(标签可以自定义) 逐渐被 json 取代     ->      xhtml ->        html

### DOM基本操作

先看 DOM 几个案例，在 DOM1, 2,3.html 里面

一、

```html

<div></div>

```

```js

var div = document.getElementByTagName('div');


var div = document.getElementsByTagName('div')[0];
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = 'red';

div.onclick = function() {
    this.style.backgroundColor = 'green';
    this.style.width = '200px';
    this.style.height = '200px';
    this.style.borderRadius = '50%';
    // alert("ok");
}

var count = 0;
div.onclick = function() {
    count++;
    if (count % 2 == 1) {
        this.style.backgroundColor = 'green';
    } else {
        div.style.backgroundColor = 'red';
    }
}
```

二、

```html

<div class="wrapper">
    <button>111</button>
    <button>222</button>
    <button>333</button>
    <div class="content">Lorem, ipsum.</div>
    <div class="content">Lorem, ipsum dolor.</div>
    <div class="content">Lorem ipsum dolor sit.</div>
</div>

```

```js

var bts = document.getElementsByTagName('button');
var contents = document.getElementsByClassName('content')

for (var i = 0; i < bts.length; i++) {

    (function(j) {
        bts[j].onclick = function() {
            for (var i = 0; i < bts.length; i++) {
                bts[i].className = '';
                contents[i].style.display = 'none';
            }
            this.className = 'active';
            contents[j].style.display = 'block';

        }
    }(i))

}

```

查看元素节点

1、 document  代表整个文档
2、 document.getElementById()  元素 id 在ie8 以下的浏览器不区分id大小写， 而且也返回匹配 name 属性的元素
3、 getElementsByTagName()   标签名
4、 getElementsByName()         需注意，只有部分标签 name 可生效（表单， 表单元素， img, iframe）
```html

<input name="fruit">

```
```js
var div = document.getElementsByName('fruit');

```
5、 getElementsByClassName()    类名    ->  ie8 和 ie8 以下的ie版本没有， 可以多个 class 一起
6、 querySelector()             css 选择器， 在 ie7 和 ie7 以下的ie 版本没有
7、 querySelectorAll()          css 选择器， 在 ie7 和 ie7 以下的ie 版本没有

**querySelector()、querySelectorAll() 选择没有实时性，副本 所以用法被局限少用**

```html

<div>
        <strong></strong>
    </div>

    <div>
        <span>
            <strong class="demo"></strong>
        </span>
    </div>
```
```js
<script>
    var strong = document.querySelector('div > span strong.demo');
    var strong1 = document.querySelectorAll('div > span strong.demo')
</script>

```

## 节点的类型

- 元素节点      ----    1
- 属性节点      ----    2
- 文本节点      ----    3
- 注释节点      ----    8
- document      ----    9
- DocumentFragment      ----    11

## 遍历节点数

- parentNode -> 父节点
- childNodes    -> 子节点们
- firstChild    -> 第一个子节点
- lastChild     -> 最后一个子节点
- nextSibling   -> 后一个兄弟节点
- previousSibling      ->   前一个兄弟节点

```html
<div>
    <span></span>
    <div>
        <p></p>
    </div>
</div>
```

```js
    <script>
        var p = document.getElementsByTagName('p')[0];
        console.log(p.parentNode);
        var div = document.getElementsByTagName('div')[0]
        console.log(div.childNodes); // 包含文本节点        
        console.log(div.childNodes.length);
        console.log(div.firstChild);
        console.log(div.lastChild);
        var span = document.getElementsByTagName('span')[0];
        console.log(span.nextSibling);
        console.log(span.previousSibling);
    </script>

```

## 基于元素节点数的遍历, ie9 和 ie9 以下不兼容

- parentElement     ->  返回当前元素的父节点元素
- children          ->  只返回当前元素的元素子节点
- node.childElementCount === node.children.length   ->  当前元素节点的子元素的个数
- firstElementChild     ->      返回的是第一个元素子节点（IE 不兼容）
- lastElementChild      ->      返回的是最后一个元素子节点（IE 不兼容）
- nextElementSibling / previousElementSibling       ->      返回后一个/前一个兄弟元素

```html
<div>
    <span></span>
    <div>
        <p></p>
    </div>
</div>
```

```js
    <script>
        <script>
        var p = document.getElementsByTagName('p')[0];
        console.log(p.parentElement);
        var div = document.getElementsByTagName('div')[0];
        console.log(div.children);
        console.log(div.childElementCount);
        console.log(div.firstElementChild);
        console.log(div.lastElementChild);
        var span = document.getElementsByTagName('span')[0];
        console.log(span.nextElementSibling);
        console.log(span.previousElementSibling);
    </script>
    </script>

```

## 节点的四个属性

1、 nodeName, 元素的标签名，以大写形式表示， 只读
2、 nodeValue, Text节点或Comment(注释) 节点的文本内容， 可读写
3、 nodeType， 该节点的类型， 只读
4、 arributes, Element节点的属性集合

- 节点的一个方法        Node.hasChildNodes()    该节点有无子节点

- p.hasChildNodes()
  true
- span.hasChildNodes()
  false
- div.hasChildNodes()
  true

### 属性节点

```html

<div id = "only" class = "demo"></div>

````

```js

var div = document.getElementsTagName('div')[0];
console.log(div.attribute);

```

## document继承树， 用于表示DOM的继承关系

1、document 与 Document的区别

 -   document
    #document 
 -   Document
    ƒ Document() { [native code] }  // 构造函数，供系统使用， 不能 new, 可以在原型上用
    Document原型上设置一个变量， document可以访问
eg: 
```js
    Document.prototype.abc = 'abc'
    "abc"
    document.abc
    "abc"
```

document        -->      由HTMLDocument 构造
HTMLDocument    -->      由Document 构造

2、 一些规定

- 1.getElementById方法定义在Document.prototype上. 即Elgment节点上不能使用.
- 2.getElementsByName方法定义在HTMLDocument.prototype上, 即非html中的document不能使用(xml document, Element)
- 3.getElementsByTagName方法定义在Document.prototype和Element.prototype上
- 4.HTMLDocument.prototype定义了一些常用的属性，body，head, 分別指代HTML文档中的<body> <head>标签
- 5.Document.prototype上定义了documentElement属性，指代文档的根元素，在HTML文档中，他总是指代<html>元素
- 6.getElementsByClassName、querySelectorAll、querySelector在Document.prototype, Element.prototype类中均有定义

## DOM crud

- 增
    document.createElement()
    document.createTextNode()   // 创建文本节点
    document.createComment()
    document.createDocumentFragment()   // 创建文档碎片节点

```js

var div = document.createElement('div');
div.innerHTML = 123;

document.body.appendChild(div);

var text = document.createTextNode('lorem');
var comment = document.createComment('hgieohg');

```

- 插

    PARENTNODE.appendChild()    
    PARENTNODE.insertBefore(a, b)   // 在 b 前 插入 a 

- 删

    parent.removeChild(节点名)  // 返回要删除的节点
    child.remove()

- 替换

    parent.replaceChild(new, origin)    // 父节点 替换子元素



Element节点的一些属性
- innerHTML     // Element节点中的内容
- innerText（取文本内容，不会包含标签， 与innerHTML 不同）（火狐不兼容）/ textContent(火绒支持，老版本 IE 不好使)

innerHTML 与 innerText 赋值会覆盖原有内容

```html

<div>
    <span>123</span>
    <strong>234</strong>
</div>

```

```js

var div = document.getElementsByTagName('div')[0];
console.log(div.innerHTML);
div.innerHTML = 123;    // 赋值会覆盖原有内容
console.log(div.innerHTML);
```

Element节点的一些方法

- setAttribute(属性名， 属性值)    // 设置属性
- getAttribute(属性名)    // 获取节点的属性

```js

div.setAttribute('class', 'demo');
div.getAttribute('id');

```

## little demo

1、 封装 insertAfter(); 功能类似于 insertBefore(), 在原型链上编程

```html

<div>
    <i></i>
    <b></b>
    <span></span>
</div>

```

```js

var div = document.getElementsByTagName('div')[0];
var b = document.getElementsByTagName('b')[0];
var span = document.getElementsByTagName('span')[0];
var p = document.createElement('p');
Element.prototype.insertAfter = function(targetNode, afterNode){
    var beforeNode = afterNode.nextElementSibling;
    if(!beforeNode){
        this.appendChild(beforeNode);
    }else{
        this.insertBefore(targetNode, beforeNode);
    }
    
}

```

## Date对象， 定时器

- Date对象

```js

var date = new Date();
// Sun Aug 15 2021 13:48:41 GMT+0800 (中国标准时间)

console.log(date.getDate());    // 1 ~ 31
console.log(date.getDay()); //0 ~ 6， 古希腊人认为 星期天 是第一天， 所以是 0
console.log(date.getMonth());   // 0 ~ 11
console.log(date.getYear());    // 返回 从 1900年开始 ，多少年
console.log(date.getFullYear());    // 返回 现在的年份
console.log(date.getHours());       // 0 ~ 23
console.log(date.getMinutes());     // 0 ~ 59
console.log(date.getSeconds());     // 0 ~ 59
console.log(date.getMilliMinutes());     // 毫秒 0 ~ 999
console.log(date.getTime());        // 返回 1970 年 1 月 1 日至今的毫秒数
console.log(date.getTimezoneOffset());     // 返回本地时间与格林威治标准时间（GMT）的分钟差
console.log(date.getUTCDate());     // 根据世界时从 Date 对象返回月中的一天（1 ~ 31）
console.log(date.getUTCDay());     // 根据世界时从 Date 对象返回周中的一天（0 ~ 6）
date.setTime(123456789);
console.log(date);
date.toString();
date.toTimeString();

```

- 定时器, window 中的方法

1、setInterval

```js

// 每隔 1000 毫秒（一秒）执行一次函数,返回唯一标识
setInterval(function(){},1000)

var i = 0;
var timer = setInterval(function(){
    console.log('我真帅');
    i++;
    if(i == 10){
        clearInterval(timer);   // 参数是 setInterval 的唯一标识
    }
    
},1000);
```

**注意： setInterval("console.log('a');", 1000) 这样也能执行**

2、setTimeout
clearTimeout

推迟一段时间后执行

```js
// 1000 毫秒后执行函数
setTimeout(funtion(){},1000);

```

## 脚本化css, 控制行间css

- 读写元素css属性

1、 dom.style.prop, 可读行间样式， 没有兼容性问题， 碰到float 这样的保留字属性， 前面应加css
复合属性必须拆解， 组合单词变成小驼峰式写法
写入的值必须式字符串
eg: float   -> cssFloat
```html

<div style="width:100px;height:100px;background-color:red; "></div>

```

```js

var div = document.getElementsByTagName('div')[0];

console.log(div.style);
div.style.backgroundColor = 'green';
div.style.borderRadius = '5px';
div.style.cssFloat = 'left';

```

2、计算样式
**获取元素 各个样式的最终值**
- window.getComputedStyle(ele, null);

第二个参数， 获取伪元素属性
比如 ： window.getComputedStyle(ele, 'after');

- 计算样式只读

- 返回的计算样式的值都是绝对值， 没有相对单位

- IE8 及 IE8以下不兼容

上面的 html 一样用
```js

window.getComputedStyle(div,null);

```

3、查询样式，IE 独有的样式

- ele.currentStyle

- 计算样式只读

- 返回的计算样式的值不是经过转换的绝对值

```js

div.currentStyle

```

### 封装兼容性方法 getStyle(ele, prop)

```js

function getStyle(element, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[prop];
    } else {
        return element.currentStyle[prop];
    }
}

```


```js

var div = document.getElementsByTagName('div')[0];

div.onclick = function(){
    div.className = '.green';
}

```




