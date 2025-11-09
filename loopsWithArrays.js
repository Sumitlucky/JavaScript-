let fruits = ["Mango","apple","banana","litchi","orange"];
fruits.push("pineapple")

for(let i=0; i<fruits.length; i++) {
    console.log(i,fruits[i]);
}

console.log("only print odd index");
for(let i=1; i<fruits.length; i=i+2) {
    console.log(i,fruits[i]);
}

console.log("only print even index");
for(let i=0; i<fruits.length; i=i+2) {
    console.log(i,fruits[i]);
}

console.log("print froward with the help of for loops");

for(let i=fruits.length-1;i>=0; i--) {
    console.log(i,fruits[i]);
}


 