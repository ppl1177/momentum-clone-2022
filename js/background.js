const images = ["1.jpeg", "2.jpeg", "3.jpeg"];
const myImage = images[Math.floor(Math.random()*images.length)];
const bgImgDiv = document.querySelector("#bgImg");

const bgImg = document.createElement("img");

bgImg.src = `img/${myImage}`

bgImgDiv.appendChild(bgImg);
