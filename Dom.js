// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "spiderman.jpg";
//     console.log(`value of image no. ${i} is change.`);
// } 


//----------------------------------------------

//querry selector


// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("p"));

// console.dir(document.querySelector("div a")); 

// console.log(document.querySelector("div a")); 

// console.dir(document.querySelectorAll("div a"));

//-----------------------------------------------------

// USING PROPERTIES AND METHODS

let links = document.querySelectorAll(".box a");

for(link of links) {
    link.style.color = "pink";
}  

// for(let i = 0; i < links.length; i++) {
//     links[i].style.color = "red";
// }