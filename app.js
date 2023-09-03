const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

//Drawing Rectangle
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100); //x,y,width, hight

//Drawing Circle
ctx.fillStyle = "red";
ctx.arc(300, 300, 100, 0, Math.PI * 2); //x,y,radius, start angle, end angle
ctx.fill();

//Drawing Lines
ctx.beginPath(); //Starting point
ctx.strokeStyle = "white"; // Make mark
ctx.lineWidth = 5;
// for (let i = 1000; i <= 0; i - 100) {
//   ctx.moveTo(230, i); //moving point
//   ctx.lineTo(300, 300); //Will draw a line
//   ctx.stroke();
// }
ctx.moveTo(230, 230); //moving point
ctx.lineTo(300, 300); //Will draw a line
// ctx.moveTo(230, 300); //moving point
// ctx.lineTo(300, 300); //Will draw a line
ctx.stroke();

//Draw text
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.lineWidth = 2;
ctx.fillText("Hello World", 300, 100, 300); //text, x, y, max-width
ctx.strokeText("Hello World", 300, 500, 300);

//draw img
const img = document.querySelector("img");
img.style.display = "none";
img.addEventListener("load", () => {
  ctx.drawImage(img, 270, 250, 100, 100); //img, x,y, width, hight
});
