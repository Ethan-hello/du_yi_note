## js介绍

js数据类型

原始值：Number、String、Boolean、undefined、null
引用值： array、 object、function、...........(很多)

array :
```js
    var arr = [1, 2, 3, false, 'abc'];
```

js天生浮点型

```js
document.write(xxxxx); // 在网页上输出xxxx
```


语法基本规则：
- 每条语句以 ; 结尾
- js 语法错误会引发后续代码终止， 但不会影响其他js代码块， 代码块就是另一个script 标签里面的js代码


运算操作符：
- + 用于数字相加或字符串连接， 任何数据类型加字符串都等于字符串
```js

        // 输出 NaN（Number） 不是一个数字 0 
        var a = 0 / 0;
        document.write(a); 

        // 输出 Infinity(Number 数据类型) 无穷大 因为 1 中有无穷多个0
        var b = 1 / 0;
        document.write(b) 

```

## 运算符

- 比较运算符, == 、 > 、>=、 <=、!=
- 逻辑运算符， || 、 && 、!

所有与 NaN 相关的逻辑操作，都为 fasle.
所有与 NaN 相关的数学运算，都为 NaN 

undefined、null、 NaN、 ""、 0    ==> false

特例 ***undefined、 null 既不 大于0 也不小于0 更不等于 0***

特例 ***undefined == null    ===>   true*** 

特例 *** NaN == NaN  ===> false NaN === NaN  ===>   false ***

### &&

&& 在js 中如果前一个表达式为真， 则会返回第二个表达式的值，比如 1 && 2, 会返回2.
            如果前一个表达式为假，直接返回 第一个表达式的值 ， 后面所有的表达式都忽视掉， 比如 0 && 2 + 2， 直接会返回 false

```js

document.write(undefined == undefined); // true

document.write(Infinity == Infinity);  // true

document.write(NaN == NaN);// fasle


```

js 中 switch-case 语句 case 可以放任何类型的数据，字符串、布尔值等等都行

### 数组

```js

var arr = [1, 2, 3, false, undefined];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('arr.length : ' + arr.length)

```

### 对象

```js
var obj = {
            lastName: "xiao",
            age: 20,
            sex: undefined,
            wife: 'xiaoliu',
            handsome: false

        }

        console.log(obj.handsome)
```


## 类型转换 typeof

typeof 可以返回 number、 string、 boolean、 object、 undefined、 function 字符串

此时的 object 表示数据为引用值， 对象、数组、null(null 是浏览器历史遗留问题，null最早是用来代替空对象的，所以返回object. 特例) 都会返回 object

```js

    var num = 123;
    console.log(typeof(num));

    var num = [];
    // var num = {};
    console.log(typeof(num));

    var num = function() {};
    console.log(typeof(num));

```

### 显示类型转换

- Number(mix), null -> 0, true -> 1, undefined -> NaN, 
- parseInt(string, radix)， 转化成整型的数字, null 、true 、undefined -> NaN, radix(规定按什么进制转换， 2 ~ 36)
- parseFloat(string) 
- toString(radix), undefined、null 不能使用该方法
- String(mix)
- Boolean()


Number()
```js

var num = Number('123');
console.log(typeof(num) + ':' + num);

var demo = true;
var num = Number(demo);
console.log(typeof(num) + ':' + num);

var num = Number(undefined);
console.log(typeof(num) + ':' + num);

var num = Number('a');
console.log(typeof(num) + ':' + num);

var num = Number('1234a');
console.log(typeof(num) + ':' + num);

```

parseInt()
``` js

var num = parseInt('123');
console.log(typeof(num) + ':' + num);

var num = parseInt('123.789');
console.log(typeof(num) + ':' + num);

var num = parseInt('123abc');
console.log(typeof(num) + ':' + num);

var num = parseInt(true);
console.log(typeof(num) + ':' + num);

var num = parseInt('a');
console.log(typeof(num) + ':' + num);

```



### 隐式类型转换

- isNaN() 判断是否为 NaN

判断前会进行转换 先调用 Number()

```js

console.log(isNaN(null));
console.log(isNaN(undefined));

```

- --、++ 、+ / - (正负)    -> Number(), 

```js

var a = 123;
a++;


var a = '123';          // Number()
a++;

```

- +         ->      String()

```js

    var num = 1 * '1';
    console.log(typeof(num));

    var num = 1 - '1';
    console.log(typeof(num));

    var num = '2' - '1';
    console.log(typeof(num));

    var num = '2' * '1';
    console.log(typeof(num));

```

- * / % -           ->          Number()

## 函数

解释型语言不输出地址

```js

function test() {
    var a = 123;
    var b = 234;
    document.write(a + b);
}

test();

document.write(test);

```

js 使用函数有两种方法， 函数声明和函数表达式

```js
// 函数声明

function(){}; 

// 命名函数表达式 
var test = function test(){
    document.write('a');
}

var test = function abc() { // abc 被忽略， 只能调用 test, test.name = 'abc'
    document.write('a');
}

test();

// 匿名函数表达式       --- 用的多， 函数表达式一般指的是这个

var test = function (){     // test.name = 'test'
    document.write('a');
}


```

js 函数的形参 不需要声明数据类型 并且形参个数不限制参数。

js 中存在 实参列表 arguements 存放实参

- 实参个数多于形参时， 多余的实参被忽略

- 形参个数多余实参时,  多余的形参 被认为是 undefined类型的数据

```js

function sum (a, b){
    console.log(arguments);
    console.log(sum.length);        // sum.length 说明形参的个数
}

sum(11, 2, 3);  // 3 被忽略 ， arguements 会保存 11、2、3 [11, 2, 3] 

sum(11)         // b = undefined

```

js 中的映射规则 规定 形参变量的值改变， arguments 实参列表中 对应的值也发生改变，若无对应的值则为 undefined 反之亦然、

但 二者并不是同一个变量

```js

function sum(a, b) {
    // a = 22;
    // console.log(arguments[0]);

    arguments[0] = 22;
    console.log(arguments[0]);
}

sum(11, 2);

```



```js

function sum(a, b) {

    b = 2;
    console.log(arguments[1]);
}

sum(2);

```

字符串访问每一位的字符 xxx.charAt(index);

## js 运行三部曲

- 语法分析
- 预编译
- 解释执行


### 预编译

- 函数声明整体提升
- 变量 声明提升

预编译

预编译前奏： 1、imply global 暗示全局变量， 即任何变量，如果变量未经声明就赋值，此变量就为全局对象( window )所有
            2、一切声明的全局变量，全是window的属性 eg: var a = 123;        ===> window.a=123;


局部预编译四部曲: 1、生成一个 AO 对象（活跃对象， 也就是执行期上下文）， Activation Object 
             2、找形参和变量声明， 将变量和形参名作为 AO 属性名， 值为 undefined
             3、将实参值和形参统一
             4、在函数体里面找函数声明(不是函数表达式)，值赋予函数体
全局预编译： 1、 生成一个 GO 对象 global object， GO === window
            2、 找变量声明，值为 undefined
            3、 找函数声明， 并赋值

测试1
```js

function fn(a){
    console.log(a);
    var a = 123;
    console.log(a);
    function a (){};
    console.log(a);
    var b = function(){};
    console.log(b);
    function d(){}
}

```

- 找形参和变量声明 AO{
    a : undefined,
    b : undefined,
}

- 实参和形参统一
    AO{
        a : 1,
        b = undefined
    }

- 找函数声明
    AO{
        a = function a () {},
        b = undefined,
        d = function d () {}
    }


测试2

```js

function test(a, b){
    document.write(a);
    c = 0;
    var c;
    a = 3;
    b = 2;

    document.write(b);
    function b () {};
    function d () {};
    document.write(b);
}

test(1);
```

1、AO{
    a : undefined,
    b : undefined,
    c : undefined
}

2、AO{
    a : 1,
    b : undefined,
    c : undefined
}

3、AO{
    a : 1,
    b : function b () {},
    d : function d () {},

测试3
```js

function test(a, b){
    console.log(a);
    console.log(b);
    var b = 234;
    console.log(b);
    a = 123;
    console.log(a);
    function a () {};
    var a;
    b = 234;
    var b = function () {};
    console.log(a);
    console.log(b);

}

```

function test(){
    var a = b = 3; // b 是局部变量， a 是全局变量 ， 在window中
}

```


下列代码能执行就是因为预编译
```js

test();

function test(){
    console.log('a');
}

```

```js

/* 会报 a 未被引用的错误
console.log(a) */

/* 但这样不会报错， 输出 undefined
console.log(a)
var a = 123; */

```

```js

console.log(a);

function a (){

}

var a = 123;


```

测验

```js
var str = false + 1;
console.log(str);
var demo = false == 1;
console.log(demo);
if(typeof(a) && -true + (+undefined) + ""){
    console.log("基础扎实");
}
if(11 + "22"  * 1 == 33){
    console.log("基础扎实");
}
!!" " + !!"" - !!false || console.log("你觉得能打印， 你就是🐖");
 ```

 测试

```js

var x = 1;

if(function f(){}){
    x += typeof(f);
}

// 输出 x = '1undefined'
console.log(x);

```

测试

```js

window.foo || window.foo = "bar";   // 这样写会报错，因为优先级， || > = , 所以就变成了 
                                    // (window.foo || (window.foo) = "bar";

window.foo || (window.foo = "bar");

```


## 作用域精解

1、[[ scope]]：每个 javascript 函数都是一个对象， 对象中有些属性我们可以访问，但有些不可以，这些属性仅供 JavaScript 引擎存取， 
[[ scope ]] 就是其中一个， [[ scope]] 指的就是我们说的作用域， 其中存储了运行期上下文的集合

运行期上下文： 当函数执行时会创建一个称为执行期上下文的内部对象， 函数每次执行时对应的执行上下文都是独一无二的，所以多次调用一个函数会导致创建多个执行期上下文，当函数执行完毕它所产生的执行上下文被销毁

查找变量： 从作用域的顶端依次向下查找

2、 作用域链：[[ scope]] 中所存储的执行期上下文对象的集合，这个集合呈链式链接， 我们把这种链式链接叫做作用域链

示例

```js

function a (){
    function b (){
        var b = 234;
    }
    var a = 123;
    b();
}

var glob = 100;
a();

```


## 闭包

当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄漏

内部的函数， 被 return 返回， 必定生成闭包

```js

a = 100;
function demo(e){
    function e(){}
    arguments[0] = 2;
    document.write(e);
    if(a){
        var b = 123;
        function c(){

        }
    }
    var c;
    a = 10;
    document.write(b);
    f = 123;
    document.write(c);
    document.write(a);
}
var a;
demo(1);
document.write(a);
document.write(f);

```


闭包示例 

```js
// 输出 10 个 10

function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = function() {
            console.log(i);
        }
    }

    return arr;
}

// 输出 0 ~ 9 
function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {

        (function (j) { 
          arr[j] = function() {
            console.log(j);
        }  
        }(i))     
    }

    return arr;
}

var myArr = test();
for (var i = 0; i < myArr.length; i++) {
    myArr[i]();
}

```


闭包示例1

```js

function a () {
    var num = 100;
    function b () {
        num ++;
        console.log(num);
    }
    return b;
}

var demo = a();
demo();
demo();

```

### 闭包的作用

1、实现共有变量 eg: 函数累加器

```js

function add(){
    var count = 0;
    function demo(){
        count ++;
        console.log(count);
    }

    return count;
}

var counter = add();
counter();
counter();

```

2、可以做缓存 eg: eater

```js

function test(){
    var num = 100;
    function a(){
        num++;
        console.log(num);
    }
    function b(){
        num--;
        console.log(num);
    }

    return [a, b];
}

var myArr = test();
myArr[0]();
myArr[1]();

```

```js

function eater (){
    var food = "";

    var obj = {
        eat : function (){
            console.log("I am eating " + food);
            food = "";
        },
        push : function (myFood){
            food = myFood;
        }
    }

    return obj;
}

var eater1 = eater();
eater1.eat();
eater1.push("fish");
eater1.eat();
```

3、可以实现封装， 属性私有化 eg: Person();

4、模块化开发， 防止污染全局变量

## 立即执行函数

此类函数没有声明， 在一次执行过后立即释放， 适合做初始化工作

```js
// 写法1（推荐）： (function(形参){}(实参))
// 写法2： (function(){})();

(function(){

}())

```


## 对象

- 对象的创建方法
1、 
```js
var obj = {}
```

2、构造函数
    1）系统自带的构造函数 Object(), 会生成一个空的对象, 
```js
    var obj = new Object();
    // obj = {};
```
    2) 自定义
```js

function Car(color) {

    this.color =color;
    this.name = "BMW";
    this.height = "1400";
    this.width = "4900";
    this.weight = 1000;
    this.health = 100;
    this.run = function() {
        this.health--;
    }

}

var car = new Car();

```

示例
```js

var mrDeng = {
    name : "MrDeng",
    age : 40,
    sex : "male",
    health : 100,
    smoke : function (){
        console.log('I am smoking ! cool !!!');
        this.health--;
        // mrDeng.health--;
    },
    drink : function (){
        console.log('I am drink');
        this.health++;
        // mrDeng.health++;
    }
}

// 对象属性的增加

mrDeng.wife = 'xiaoliu';
mrDeng.get = function (){};

// 对象属性的删除

delete mrDeng.name;

```

### 构造函数内部原理

- 1、在函数体最前面隐式加上 this = {}
- 2、执行 this.xxx = xxx;
- 3、隐式返回this   
*** 如果显式的返回一个对象，不会隐式返回this, 但显式返回一个原始值， 显式操作无效，仍然隐式返回this ***


```js

function Person(name){
    // var this = {};

    this.name = name;

    // this = {
    //     name : name
    // }

    // return this;
}

```

## 包装类

Number、 String 、 Boolean 

```js

var num = new Number(123);
console.log(num.toString());

```

视频里没讲，问 test() 与 new test(); 运行的区别
```js

var a = 5;
function test(){
    a = 0;
    alert(a);
    alert(this.a);      // 如果 不new 一个对象 this 都指向window里面的值， new 了的话 如果不赋值 则为undefined
    var a;
    alert(a);
}

test(); // 0 -> 5 -> 0
new test(); // 0 -> undefined -> 0

```


## 原型(prototype)
1、 定义 ： 原型是function 对象的一个属性，它定义了构造函数制造出对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。
2、 利用原型特点和概念，可以提取共有属性
3、对象如何查看原型     ->      隐式属性 _proto_
4、对象如何查看对象的构造函数       ->      constructor

```js

Person.prototype.name = "hehe";

function Person() {

}

var person = new Person();

```

## 原型链（个人认为 类似于java 中的继承）

```js

Grand.prototype.lastName = "xiao";
function Grand(){

}

var grand = new Grand();

Father.prototype = grand;
function Father(){
    this.name = "xiuming";
}
var father = new Father();

Son.prototype = father;
function Son(){
    this.hobby = "smoke";
}

var son = new Son();

```

以上例来说，一般来说， son 改变不了 father、 grand 的原型，但有特例

特例： 如果father 中有对象，则可以对对象的内容进行修改
```js
Father.prototype = grand;
function Father(){
    this.name = "xiuming";
    this.money = {
        card : "gherbg"
    }
}
var father = new Father();

var son = new Son();

son.money.name = "xzg";

```

一个巨坑, 问 Person.sayName() 与 Person.prototype.sayName() 分别输出什么。

总之， sayName 里面的this，谁调用这个方法， this 就是指向谁

```js

Person.prototype = {
    name : "a",
    sayName : function(){
        console.log(this.name);
    }
}

function Person (){
    this.name = "b";
}

var person = new Person();

```


绝大多数对象的最终都会继承自Object.prototype, 特例就是 Object.create() 方法


``` js
// var xxx = Object.create(原型)
var obj = {name : "sunny", age : 123};
var obj1 = Object.create(obj);

// call , 123 去调用 Object.prototype.toString 方法

Object.prototype.toString.call(123);

// 返回 "[object Number]"
```


## call / apply

作用， 改变this 指向
区别， 后面传的参数形式不同

- call

```js

function Person(name, age){
    this.name = name;
    this.age = age;
}

var person = new Person("deng", 100);
var obj = {
}

// test()       ->      test.call()  实际上操作

Person.call();

// Person 中所有的this 指向 obj， this = obj
Person.call(obj, 参数， 参数，...);

```

```js

function Person(name, age, sex){
    var money = 100;        // 不能 被别人修改
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Student(name, age, sex, tel, grade){
    Person.call(this, name, age, sex);
    this.tel = tel;
    this.grade = grade;
}

var student = new Student('sunny', 123, 'male', 139, 2017);

```

- apply

与 call 差不多

区别；
    1、 apply 参数 以数组的形式一起传入



## 命名空间

管理变量， 防止污染全局， 适用于模块化开发


## 对象的枚举

- 遍历对象的属性名
```js

var obj = {
    name : '123',
    age : 13,
    sex :'male',
    height : 180,
    weight : 75
}

for(var prop in obj){
    // console.log(prop + ' ' + typeof(prop));  遍历对象的属性名
    // console.log(obj.prop + ' ' + typeof(obj.prop));   都输出undefined, obj.prop 实质 上是obj.['prop'], 寻找有无 属性名为prop 的变量
    console.log(obj[prop] + ' ' + typeof(obj[prop]));
}

```

- hasOwnProperty(对象属性名)， 判断属性是own, 还是 原型链上的  , 返回值为布尔值

```js

var obj = {
    name : '123',
    age : 13,
    sex :'male',
    height : 180,
    weight : 75,
    __proto__ : {
        lastName : 'deng',
        fristName : 'gang'
    }
}

for(var prop in obj){
    // if (obj.hasOwnProperty(prop)) {
    //     console.log(obj[prop] + ' ' + typeof(obj[prop]));
    // }
    console.log(obj[prop] + ' ' + typeof(obj[prop]));
    
}
```

## this

1、 函数预编译过程      this --> window
2、 全局作用域里        this --> window
3、 call/ apply 可以改变函数运行时this 指向
4、 obj.func()、 func() 里面的this 指向 obj

测试

```js

var name = "222";
var a = {
    name : "111",
    say : function (){
        console.log(this.name);
    }
}
var fun = a.say;
fun();
a.say();
var b = {
    name : "333",
    say : function (fun){
        fun();
    }
}

b.say(a.say);
b.say = a.say;
b.say();

```


## arguments

- arguments.callee， 指向函数的引用

```js

function test(){
    console.log(arguments.callee);
    console.log(arguments.callee == test);
}

test();


// 输出
/*  ƒ test() {
    console.log(arguments.callee);
} */

```

用途：递归初始化 100！ 由于立即执行函数没有引用， 所有适用于 arguments.callee

```js

var num = (function (n){
    if(n == 1){
        return 1;
    }

    return n * arguments.callee(n - 1);
}(100))

```

- func.caller, 指向被被调用者的引用, 严格模式不让用

```js

function test(){
    demo();
}

function demo(){
    console.log(demo.caller);
}

test();


```

## 克隆

- 浅度克隆

```js


```


- 深度克隆

```js

obj = {
    name: 'abc',
    age: 123,
    card: ['visa', 'master'],
    wife: {
        name: 'bcd',
        son: {
            name: 'aaa'
        }
    }
}

var obj1 = {

}

function deepClone(origin, target) {

    var target = target || {};

    toStr = Object.prototype.toString;

    arrStr = "[object Array]";
    objStr = "[object Object]";

    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {

            if (origin[prop] !== null && typeof(origin[prop]) == 'object') {
                if (toStr.call(origin[prop]) == arrStr) {
                    target[prop] = [];
                } else if (toStr.call(origin[prop]) == objStr) {
                    target[prop] = {};
                }

                deepClone(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }

    return target;
}

deepClone(obj, obj1);
```


## 三目运算符

## 数组

数组方法 有es3.0、 es5.0、 es6.0版本

es3.0 方法

- push, pop, shift(删除数组前面的元素), unshift(在数组前面添加元素), sort, reverse

- splice(切片, 会对数组进行改变， 要求被切的会被删除， 返回切好的数组)

    arr.splice(从第几位开始， 截取多少位， 在切口处添加新的数据(可以无穷多个))

```js

var num = [1, 2, 2, 3, 3, 10];
num.splice(1, 2);

num.splice(-1, 1);      // 反过来切

num.sort();  // 默认升序排列, 默认按 ascii码 比较， 这样结果为 1, 10, 2, 2, 3, 3

// 降序     1） 当返回值为负数时， 前面的数在前
//         2)   为正数时， 后面的数在前
//          3)  为0， 保持不变

num.sort(function (a, b){
    // 降序
    /* if (a < b) {
        return 1;
    } else {
        return -1;
    }  */     
    
    // return a - b; // 升序
    return b - a;   // 降序
});

```
以下方法不改变原数组， 会生成一个新的数组
- concat(连接两个数组), join(参数必须是字符串， 默认是 按 ， 号连接)      --> split(字符串的方法，用于字符串拆分), toString, slice

arr.slice(从哪位开始截取， 截取到哪位)  区间前闭后开
arr.slice(从哪位开始截取)   从该位一直截到数组末尾 ， 空参截取全部

```js

var arr = [1, 2, 3];
var arr1 = [3, 5, 6];

var arr3 = arr.concat(arr1);
arr.slice(1, 2);
arr.join("-");  // 输出 1-2-3


```




```js

var arr = [1, 2, 3];
var arr = new Array();

```

## 类数组 （类似数组）

1、 可以利用属性名模拟数组的特性
2、 可以动态的增长length属性
3、 如果强行让类数组调用push方法， 则会根据 length 属性值的位置进行属性的扩充

arguements 是一个类数组， 它无法调用数组的方法

```js

var obj = {
    "0" : 'a',
    "1" : 'b',
    "2" : 'c',
    "length" : 3,
    "push" : Array.prototype.push
}

obj[0]
obj.push(5);

// obj 的变化
// {0: "a", 1: "b", 2: "c", 3: 5, length: 4, push: ƒ}

```


## 自己做type

```js

function type(target) {

if (target === null) {
    return 'null';
}

var ret = typeof(target);

var template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "Number object",
    "[object Boolean]": "Boolean object",
    "[object String]": "String object",
}

var toStr = Object.prototype.toString;

if (ret == 'object') {
    var str = toStr.call(target);

    return template[str];
} else {
    return ret;
}
}

```

## 数组去重，在原型链上操作


```js

Array.prototype.unique = function (){
    var temp = {};
    var arr = [];
    var len = this.length;

    for(var i = 0; i < len ;i++){
        if(! temp[this[i]]){
            temp[this[i]] = this[i] == 0 ? 1 this[i];
            arr.push(this[i]);
        }
    }

    return arr;
}

```

## 变态

- typeof([] + 1)
- "string"
- typeof([] - 1)
- "number"
- typeof([] * 1)
- "number"


```js

(function(x){
    delete x;       // 删不了
    return x;
}(1))

function test(){
    console.log(typeof(arguments));
}
test();

// 会报错
// Uncaught ReferenceError: a is not defined
// at <anonymous>:5:9
var h = function a (){
    return 23;
}

console.log(typeof(a()));

```

## try catch

- 在try 里面发生错误， 不会执行错误后的 try 代码

```js

/* try{
    console.log('a');
    console.log(b);
    console.log('c')
}catch(e){
    console.log('b')
}
    console.log('d') */


try {
    console.log('a');
    console.log(b);
    console.log('c');
} catch (e) {
    console.log(e.name + " " + e.message);
}
console.log('d');

```

### Error.name 的六种值对应的信息

1、 EvalError : eval()使用与定义不一致
2、 RangeError : 数组越界
3、 ReferenceError : 非法或不能被识别的引用数值
4、 SyntaxError :  语法错误
5、 TypeError : 操作数类型错误
6、 URIError : URI处理函数使用不当

## es5 严格模式

- "use strict", 表示不再兼容es3 的一些不规则语法， 使用全新的es5 规范(es3.0 与 es5.0 产生冲突的区域)

两种用法： 1、 全局严格模式  2、 局部函数内严格模式（推荐）


就是一行字符串， 不会对不兼容严格模式的浏览器产生影响

- 不支持**with**、**arguments**、 **callee**、 **func、 caller**, 变量赋值前必须声明， 局部this 必须被赋值(**不在默认指向window, 默认是 undefined**)(Person.call(null/ undefined)赋值什么就是什么)， 拒绝重复属性和参数。

浏览器 基于es3.0的 + es5.0 的新增方法 使用的

with 的使用, with 能把参数作为最近的 AO, 可用在命名空间的部分
但with 对作用域链的改变， 容易消耗系统资源， 使效率变慢， 所以 es5 对其进行了限制

```js

var obj = {
    name : 'obj'
}

var name = 'window'

function test(){
    var name = 'scope';
    with(obj){
        console.log(name);
    }
}

test();

with(document){
    write('a');
}
```

```js
"use strict"
function test(){
    console.log(arguments.callee);       // es5 不支持， 报错  Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
}


```

es 5

- eval es3 不能使用, 因为eval 会改变作用域， es5可以

```js

"use strict"

var a = 123;
eval('console.log(a)');   // 输出 123

```
















