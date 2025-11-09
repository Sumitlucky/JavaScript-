// Default Parameter
// function sum(a,b=3) {
//     return a+b;
// }
// console.log(sum(2));

//spread (Array literals)
// let arr = [1,2,3,4,5,7,8,6,6,5,5,6,43,6];
// console.log(arr);
// console.log(...arr);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];

// console.log(nums);
// console.log(...nums)

// spread (object literals)


// const data = {
//     email : "ironman@gmail.com",
//     password : "abcd",
// };

// const dataCopy = {...data, id:123,country:"india"};

// console.log(dataCopy) 


//Rest methods

// function sum(...args) { //arguments
//     for(let i = 0; i < args.length; i++) {
//         console.log("you gave us:", args[i]);
//     }
// }
// console.log(sum(1,2,3,4,5,6,7));


// function min(a,b,c,d) {
//     console.log(arguments);
// }

// console.log(min(1,2,3,4));

// function sum(...args) {
//     return args.reduce((sum,el) => sum + el);
// }
// console.log(sum(1,2,3,4,5));

//-----------------------------------------------------------

// Minimum value

// function min(...args) {
//     return args.reduce((min,el) => {
//         if(min > el) {
//             return el;
//         }else {
//             return min;
//         }
//     });
// }
// console.log(min(0,2,3,4,5,67,8,-5,4,))

//---------------------------------------------------
//massage store

// function min(msg,...args) {
//     console.log(msg);
//     return args.reduce((min,el) => {
//         if(min > el) {
//             return el;
//         }else {
//             return min;
//         }
//     });
// }
// console.log(min("sumit ji ",0,2,3,4,5,67,8,-5,4,))

//--------------------------------------------------------------------------

//Desturing methods 

// let names = ["tony","bruce","peter","steve","wer","fyfg","ggi","gytyu"]

// let [winnner,runnnerup,secondrunnnerup,...others] = names;

// console.log("1st position :",winnner);
// console.log("1st runnerup :",runnnerup);
// console.log("2nd runnnerup :",secondrunnnerup);
// console.log("others racer :",others);

//-------------------------------------------------------

//Destructuring Object

const student = {
    name : "sumit",
    class : "btach",
    age : 23,
    subject : ["computer science","Artificial inteigency"],
    username : "sumit@123",
    password : 12324,
};
const {username : user, password : pass} = student;
console.log(user);
console.log(pass);