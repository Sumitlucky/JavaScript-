// for(let i=1; i<=10; i++) {
//     console.log(i);
// }
// for(let i=10; i>=1; i--) {
//     console.log(i);
// }

// for(let i=1; i<=15; i=i+2) {
//     console.log(i);
// // } 
// for(let i = 2; i<=10; i= i+2) {
//     console.log(i);
// } 
// for(let i=0; i>=0;i++){
//     console.log(i);
// } 
let n = prompt("write your which table to show you");
n = parseInt(n)
for(let i=n; i<=n*10; i=i+n) {
    console.log(i);
}