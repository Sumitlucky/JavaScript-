// ques -> write a arrow function that returns the square of a number 'n'.

// const square = (n) => {
//     return n*n;
// }

// console.log(square(5));


// // ques -> write a function that prints "hello World" 5 times at intervals of 2sec each.

// console.log("hii there !");

// let id = setInterval( () => {
//     console.log("Hello World");
// },2000)

// setTimeout( () => {  
//     clearInterval(id);
// },10000);


// ques -> check if all numbers in our array are multiples of 10 or not

// let nums = [10,20,30,40];

// let ans = nums.every((el) => el% 10 == 0);

// console.log(ans);

//ques -> create a function to find min number in an array.

function getMin(nums1) {

    let min = nums1.reduce((min,el) => {
        if(min < el) {
            return min;
        }else {
            return el;
        }
    });
    return min;
}
let nums1 = [10,20,30,40 ,78,9];

console.log(getMin(nums1));