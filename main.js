//1. Create one function with zero parameter having a console statement;
function zeroParameter(){
    console.log("ZeroParameter Function");
}
zeroParameter();

//2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
   var summ = a + b;
   console.log(summ);
}
sum(3,4);
//3. Create one arrow function
const summ = (a,b) =>{
    console.log(a*b);
    document.getElementById("arrowfunc").innerHTML = sum(4, 5);
}
//4. "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
output:undefined

// 5."Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
output:21

// 6. "Print output
var x = 21;
a();
b();
  function a() {
   x = 20;
  console.log(x);
};
 function b() {
    x = 40;
   console.log(x);
};
output:20
40

//7. Write a function that accepts parameter n and returns factorial of n
function factorial(n){
    return n==0?1:factorial(n-1)*n;
    // if(n==0){
    //     return 1;
    // }
    // return factorial(n-1)*n;
}
console.log(factorial(5));
console.log(factorial(8));
