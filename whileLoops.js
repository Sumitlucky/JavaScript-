// console.log("print 1 to 5");
// let i = 1;
// while(i<=5) {
//     console.log(i);
//     i++;
// }

// console.log("print 5 table with the help of while loop");

// let s=5;
// while(s<=50) {
//     console.log(s)
//     s=s+5;
// }
// console.log("print 2 to 50 even number")

// let even = 2;
// while(even<=50) {
//     console.log(even);
//     even = even + 2;
// }

// console.log("print 1 to 20 odd number");
// let odd = 1;
// while(odd<=20) {
//     console.log(odd);
//     odd=odd+2;  
// }


const favMovie = "kgf";
let guess = prompt("guess my favorite movie : ");
while((guess != favMovie ) && (guess != "quit")) {
    guess = prompt("Wrong guess : please try again ");
}
if( guess == favMovie) {
    console.log("congrats!!");
}else {
    console.log("you quit")
}