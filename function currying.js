let multiply=function(x,y)
{
    console.log(x*y);
}

let multiplybytwo=multiply.bind(this,2)
let multiplybythree=multiply.bind(this,3)

//bind function fix the value of x like the commented function  below 
// let multiplybytwo=function(y)
//{
//   let x=2
// console.log(x+y);
//}

multiplybytwo(5);
multiplybythree(5)
