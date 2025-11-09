// let arr = [1,2,3,4,5,6];

// //ForEach method
// arr.forEach(function(el) {
//     console.log(el);
// });

// // function Method
// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);

// //Arrow Method

// arr.forEach( (el) => {
//     console.log(el);
// })

// -------------------------------------
// let students = [
//     {
//         name: "komal",
//         marks: 90,
       
//     },
//     {
//         name: "sumit",
//         marks: 96,
         
//     },
//     {
//         name: "sangita",
//         marks: 100,
 
//     },
// ];

// let gpa = students.map((el) => {
//     return el.marks / 10;

// });

// console.log(gpa)


// arr.forEach((student) => {
//     console.log(student.marks);
// });

// -------------------------------------------------
//MAP

// let num = [1,2,3,4,5];

// let double = num.map(function (el) {
//     // return el*2;
//     return el*el;
// });

// console.log(double)

// -------------------------------------------------------


//filter

// let nums = [1,2,3,4,4,56,7,,8,6,54,6,765,];

// let ans = nums.filter((el) => {
//     // return !el%2 == 0;// odd number
//     // return el%2 == 0; // even number
//     return el<5; // condition
// });

// console.log(ans);  

//-------------------------------------------------------

//every methods

// let every = [2,4,6].every((el) => el%2 == 0);//even value

// let every2 = [1,3,5,7].every((el) => !el%2 == 0);//odd value
// console.log(every);
// console.log(every2); 

//-------------------------------------------------------------

//Reduce

// let nums = [1,2,3,4];

// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el});
// console.log(finalVal);

//reduce maximum

let arr = [1,4,4,5,6,7,7,8,5];

// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// };

// console.log(max);

let max = arr.reduce((max,el) => {
    if(max < el) {
        return el;
    }else {
        return max;
    }
});

console.log(max);