
// "use strict"//& It is used to we canot declare variable a=20; without var keyword
// Scope 
// & 1)global scope and script scope
// & 2) local scope or  function scope
// & 3)Block Scope
// ? use debugger to check scope  

// ^ when declaring variable with var keyword it willstore in global scope
// var a=10;

// ^ declaring variable with let and const it is script scope


// let b=20;



// & Block Scope

// var a =100;
// let b= 200;
// const c =300;

// {
//     console.log(a);//100
//     console.log(b);//200
//     console.log(c);//300
//     var d= 400;
//     let e = 500;
//     const f=600;


// }
// console.log(d);//400
// console.log(e);//^e is not defined
// console.log(f);//^f is not defined
//&error e isnot defined as it is present in block scope
 //&error as f is not  defined it is present in block scope

//  & Function Scope Or Local Scope
// var a= 100;
// let b=200;
// const c=300;
// function demo (){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     var d =400;
//     let e = 500;
//     const f = 600;


// }

// demo()

// console.log(d);//^Error :D is not defined
// console.log(e);//^e is not defined
// console.log(f);//^f is not defined

 a=20;//^If used strict is used then it will show an error a is not defined without var keyword
 console.log(a);



