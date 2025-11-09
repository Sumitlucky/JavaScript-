// function hello() {
//     console.log("hello");
// }

// hello();


// function printName() {
//     console.log("sumit kuamr singh");
//     console.log("komal kumari");    
// };

// printName();


// function print1to5() {
//     for(let i = 0; i<=5; i++) {
//         console.log(i);
//     }
// }

// print1to5();

// function isAdult() {
//     let age = 8;
//     if(age>=18) {
//         console.log("Adult");
//     }else {
//         console.log("not Adult");
//     }
// }

// isAdult(); 

// function printInfo(name,age) {
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo("sumit singh rajput", 25);\

// adding two value

// function sum(a,b) {
//     console.log(a+b);
// }

// sum(12,23); 

// arr = [1,2,3,4];
// console.log(arr);

// function espression 

// let name = "sumit";

// let sum = function (a, b) {
//     return a+ b;

// } 



// Higher order functions

// function multipleGreet(func, n) {
//     for(let i = 1; i<=n ; i++) {
//         func();
//     }
// }
// let greet = function()  {
//     console.log("i hate komal");

// }

// multipleGreet(greet,100);

//odd detection function

// let odd = function(n) {
//     console.log(!(n%2 == 0));

// }
// console.log("This is odd 8 : ",odd(8));

// //Even detection function

// let even = function(n) {
//     console.log(n%2 == 0);
// }
// console.log("This is even 7 : ",even(7));




function oddOrEvenFactory(request) {
    if( request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if( request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("wrong reqest");
    }
}

let request = "odd";
    