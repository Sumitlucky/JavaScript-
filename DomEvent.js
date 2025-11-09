// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
//     alert("botton click hogya");
// };


// miltiple button 

let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.onclick = hii_sumit_jii;
    btn.onmouseenter = function () {
        console.log("you entered a button");
    };
    console.dir(btn);
}

function hii_sumit_jii() {
    alert("hi komal jii")
}