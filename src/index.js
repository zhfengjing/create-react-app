import React from 'react';
import ReactDOM,{render} from 'react-dom';//从react-dom中导入一个ReactDOM，逗号后面的内容是把ReactDOM这个对象进行解构 <==>import {render} from 'react-dom';

// import qs from 'qs';
// import  './static/less/index.less';
/*
* ReactDOM.render([JSX],[CONTAINTER],[CALLBACK]):把JSX元素渲染到页面中
* JSX:react虚拟元素
* CONTAINTER：容器，我们想把元素放到页面中的哪个容器中
* CALLBACK：当把内容放到页面中呈现触发的回调函数
*
* JSX：react独有的语法  javascrit+xml
*  和之前我们自己拼接的HTML字符串类似，都是把HTML结构代码和JS代码或者数据混合在一起，但是它不是字符串；
*
*1.不建议我们把JSX直接渲染到body当中，而是放在自己创建的一个容器中，一般我们都放在一个id为root的div中即可。
*2.在JSX中出现的{}是存放JS的，但是要求JS代码执行完成需要有返回结果（JS表达式）
*  -> {}里不能直接放一个对象数据类型的值(对象(除了给style赋值以外)，数组，函数都不行),但是数组中如果没有对象，放的都是基本值或者JSX元素，则是可以的。
*  ->{}里可以放基本数据类型值（布尔类型什么都不显示，null，undefined也是JSX元素，代表的是空，也是什么都不显示）
*  ->循环判断的语句都不支持，但是支持三元运算符；
*3.循环数组创建JSX元素(一般都是基于数组的map方法完成迭代)，需要给创建的元素设置唯一的KEY值（当前本次循环内唯一即可）
* 4.JSX元素只能出现一个根元素
* 5.给元素设置样式类用的是className而不是class
* 6.style中不能直接写样式字符串，需要基于一个样式对象来遍历赋值

* */
let root=document.querySelector("#root");
// let data="zhufengpeixun";
/*let data=[
    {
        name:'zhangsan',
        age:22
    },
    {
        name:'lisi',
        age:26
    }
];
console.log(data.map((item, index)=> {
    return <li key={index}>
        <span>{item.name}</span>
        <span>{item.age}</span>
    </li>
}));//["@", "@"]*/
/*ReactDOM.render(<div id="box">
    hello world!!
        <ul>
            {data.map((item,index)=>{
                return <li key={index}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                </li>
            })}
        </ul>
    </div>,
    root,
    ()=>{
    let oBox=document.querySelector("#box");
    console.log(oBox.innerHTML);
});*/

/*ReactDOM.render(
    <div id="box" className="box" style={{color:'red'}}>
        <h1>我是标题</h1><ul></ul>
    </div>,
    root)*/
/*
* JSX渲染机制：
* 1.基于BABEL中的语法解析模块（babel-preset-react）把JSX语法编译为React.createElement(...)的结构
* React.createElement(
*  'h1'
*  {id:'titleBox',className:'title',style:styleObj},
*  '\u73E0\u5CF0\u57F9\u8BAD'  ==》'珠峰培训'
* );
*
* 2.执行React.createElement(type,props,children),会创建一个对象（虚拟DOM）
*    type:h1
*    props:{
*      id:'titleBox',
*      className: 'title',
 *      style: styleObj,
 *      children:'珠峰培训'   =》存放的是元素中的内容
*    }
*    ref:null
*    key:null
*    __proto__:Object.prototype
*
* 3.ReactDOM.render(JSX语法最后生成的对象，容器)，基于RENDER方法把生成的对象动态创建为DOM元素，插入到指定的容器中
*
*
* */

let styleObj={color:'red'};
render(
    <h1 id="titleBox"
        className="title"
        style={styleObj}>
        珠峰培训
    </h1>,root)
console.log(React.createElement(
    'h1',
    {id: 'titleBox', className: 'title', style: styleObj},
    '\u73E0\u5CF0\u57F9\u8BAD'
));






