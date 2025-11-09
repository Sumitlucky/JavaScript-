// console.log("find the sum");
// const sum = (a ,b ) => {
//     console.log(a+b);
// };

// sum (4,5);

// console.log("find the cube");
// const cube = (n) => {
//     return n*n*n;
// }

// console.log(cube(7));

// console.log("find the square");

// const square = (n) => {
//     return n*n;
// }
// console.log(square(2));

// console.log("find the power");

// const power = (a,b) => {
//     return a**b;
// };
// console.log(power(2,6));

// // Implict return 

// const mul = (a,b) => a*b;  


const student = {
    name: "sumit",
    marks: 95,
    prop: this, //global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this); //student
        },2000);
    },

    getInfo2: function() {
        setTimeout( function ()  {
            console.log(this) //window
        },2000);
    },
}    

console.log(student.getInfo1())
console.log(student.getInfo2())