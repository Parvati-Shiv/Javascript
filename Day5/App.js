// & data types - Primitive Data Type or Non -Primitive Data type
// ^  Primitive Data Types (Immutable , Object D-refrencing)

// !Primitve Data type are number ,string , Bigint , Symbol,Null,Undefined,Boolean
// &1) Number

let a= 10;
console.log(a);
 a =30;

 console.log(a);
 a=40;
 console.log(a);

//  & 2) String
let b="React"
console.log(b);
console.log(typeof(b));

// &3) Boolean
let c = true;
console.log(c);
console.log(typeof(c));

// &4) Bigint

let d=12345679998989898989898989898676687890000087665554554466767
console.log(d);
let e=126763762767673676746767676763767574575454554n
console.log(e);
console.log(typeof(e));

//  & 5)undefined

let f= undefined;

console.log(f);
console.log(typeof(f));
// &6) Null
let g= null
console.log(g);
console.log(typeof(g));

// & 7)Symbol
let h =Symbol(10);
console.log(h);
console.log(typeof(h));


// & TYPE CASTING :Converting one data type into Another data type is called  Type Casting
// ^ There Are two types of Type Casting 1) Implicit Conversition  &  Explicit conversion
// ^ 1)Implicit Conversion
console.log(1+2);//3
console.log(5+5);//10
console.log(1-9);//-8
console.log(1*5);//5
console.log(1+"20");//120
console.log(1-"20");//-19
console.log(1*"20");//20
console.log(1*"Hello");//NaN
console.log(10/"10");//1
console.log(10+10+20-20);//20
console.log("20"-"20");//0
console.log(10-"true");//Nan
console.log(10-true);//9
console.log(true+true);//2
console.log(false-true-false);//-1

// & Typeof(important operator to check data type)
console.log(typeof(k));//Undefined
console.log(typeof("hi"));//string
console.log(typeof null);//object
console.log(typeof 1+2);//number2
console.log(typeof 1*2);NaN
console.log(typeof typeof 1);//string
console.log(typeof  typeof typeof 6666);//string
console.log(typeof Number());//number

console.log(typeof String());//string
console.log(typeof window);//object
console.log(typeof this);//Object
console.log(typeof Number);//function
console.log(typeof String);//function

// & How u can prove window and this keyword are same 
// & 1 Method we can prove
console.log(window);
console.log(this);

// & 2 ndMethod

console.log(window == this);

// & 3 rd Method

var l =20;
console.log(window.l);
console.log(this.l);

// & Explicit Conversion 
// let n = prompt("Enter Your Number")
// console.log(a);


// let m =Number(prompt("Enter your Second Number")) ;
// console.log(b);
// console.log(a+b);
let x= parseInt(prompt("Enter your Number"))
console.log(x);

let s= parseInt(prompt("Enter second number"));
console.log(s);
console.log(x+s);






















