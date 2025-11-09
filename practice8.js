// function poem() {
//     console.log("twinkle twinkle little star");
//     console.log("how I wonder , what you are");
//     console.log("up above the also high");
// }

// poem();

// function dice() {
//     // Math;
//     console.log(Math.floor(Math.random()*6) + 1);
// }

// dice(); 

// Ques -> create a function that gives us the average of 3 numbers.

// function calAverage( a , b , c) {
//     console.log((a+b+c)/3);
// }

// calAverage(12,12,12);


// ques-> print table 
// function table(n) {
//     for(let i = 1; i<=10; i++) {
//         console.log(i * n)
//     }
//     for(let i=n; i<=n*10; i+=n) {
//         console.log(i);
//     }
// }

// table(2);

// ques-> create a function that returns the sum of numbers from 1 to n.

// function getSum(n) {
//     let sum = 0;
//     for(let i = 1 ; i<=n; i++) {
//         sum = sum + i; 
//     }
//     return sum;
// }

// console.log(getSum(5));


// ques-> create a function that returns the concatenation of all strings in an array.


// let str = [" hi "," hello "," komal ji "," sumit ji "];

// function concat(str) {
//     let result = "";

//     for( let i = 0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }


let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreen() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();

