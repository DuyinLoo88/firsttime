//typescript也可以创建有名的函数和匿名函数
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 3));//4

const add1 = function (a:number, b:number) { 
    console.log(a + b);
}
add1(3, 5);//8

//参数可以是任意类型，加号起连接或者相加的作用
function add2(a:any, b:any) { 
    return a + b;
}
console.log(add2("abhcds", "sdfj"));//abhcdssdfj
console.log(add2(2, 1));//3
console.log(add2(9, "dfdfdx"));//9dfdfdx
console.log(add2(parseInt("12.3bbb"), 1));//13

//箭头表达式
//用来声明匿名函数，消除传统匿名函数的this指针问题
const sum = (arg1, arg2) => arg1 + arg2;
console.log(sum(1, 1));//2
//一个参数时，不用写括号，直接写参数
const bianliang = arg1 => { 
    console.log(arg1);
}
bianliang("xzcnz,");
//没有参数时，放一个括号就好
var a = () => { 
    alert("dskjf");
}
a();