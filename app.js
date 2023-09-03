const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

//Draw Rectangle
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100); //x,y,width, hight

//Draw Circle
ctx.fillStyle = "red";
ctx.arc(300, 300, 100, 0, Math.PI * 2); //x,y,radius, start angle, end angle
ctx.fill();

//Drawing Lines
ctx.beginPath(); //Starting point
ctx.moveTo(10, 10); //Starting pint
