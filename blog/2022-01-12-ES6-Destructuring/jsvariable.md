---
title: ES6 Destucturing
---

## 变量的动态属性

### 1.数组的解构赋值

    不同以前的
```javascript
    let a=1;
    let a=2;
```
    ES6 允许 匹配模式的解构
```javascript
    let[a,b,c]=[1,2,3];

    let[x,,y]=[1,2,3,]
    x //1
    y //3

    let[x,y,,z]=['a']
    x // "a"
    y // undefine
```

    不完全解构

```javascript
    let[a, [b], d] = [1,[2,3],4]
    a //1
    b //2
    d //4
```

### 2.默认值

    解构赋值允许指定默认值
```javascript
    比如
    let a=0,b=1;
    function(){
        [a,b]=[b,a+b];
    }

    let [foo =true] =[];
    foo //true;

    let [x, y='b']=['a']
    // x='a', y='b'
    let [x, y='b']=['a',undefine]
    //x ='a' y='b'
```
### 3.对象的解构赋值
```javascript
    let{foo, bar} = {foo:'aaa' , bar: 'bbb'}
    foo // 'aaa'
    foo // 'bbb'
```

## 需要注意的点
    结构的解构的左右代码必须放在（）里

    let x;
    ({x}={x:1})

## 主要用途：
### 交换变量的值
```javascript 
    let a=1;
    let b=2;

    [a,b]=[b,a];
```
### 从函数返回多个值

```javascript
    function example(){
        return [1,2,3]
    }
    let [a,b,c]=example()

    function example(){
        return{
            foo: 1,
            bar: 2
        }
    }
    let{foo ,bar} =example();
```
### 函数参数的定义

```javascript 
    function ([x,y,z]){...}
    f([z:3,y:2,x:1])
```
### 提取json 数据

```javascript
    let jsonData={
        id: 42,
        status:"OK",
        data: [867,5309]
    };

    let{id,status,data:number} = jsonData;

    console.log(id, status, number);
    // 42, "OK" , [867,5309]
```



