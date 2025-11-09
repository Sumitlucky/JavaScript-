//function scope


// let sum=12;// global scope

// function calSum(a , b) {
//     let sum = a+b;//function scope
//     console.log(sum);
// }

// calSum(2,4);


// block scope

// for(let s = 0 ; s <= 10; s++) {
//     console.log(s); 
// }

// let age = 18;

// if(age>=18) {
//     let str = "adult";
//     console.log(str);
// }else {
//     let str = "child"
//     console.log(str);
// }


// lexical scope or function

function outerFunc() {
    let x = 5;
    let y = 6;
    function innnerFunc() {
        console.log(x);
        console.log(y);
    }

    innnerFunc();
}

outerFunc();