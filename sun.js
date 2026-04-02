"use strict"

const canvas = document.querySelector('#canvas-light');

const context = canvas.getContext("2d");



context.fillStyle = "rgb(172, 159, 104)";
context.strokeStyle = "rgb(220, 190, 60)";


context.beginPath();
context.arc(10.5,10, 3, 0, Math.PI * 2);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.rect(10, 2, 1, 3);
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.rect(10, 16, 1, 3);
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.rect(2, 10, 3, 1);
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.rect(16, 10, 2, 1);
context.stroke();
context.fill();
context.closePath();

context.beginPath();
context.moveTo(15, 6);
context.lineTo(16, 3);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(15, 14);
context.lineTo(17, 17);
context.stroke();

context.beginPath();
context.moveTo(6,6);
context.lineTo(3,4);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(6,16);
context.lineTo(3,17);
context.stroke();
context.closePath();