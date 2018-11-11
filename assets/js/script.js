var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Bras
ctx.fillStyle = "#976F0F";
ctx.fillRect(100,100,200,30);


// Mains
ctx.beginPath();
ctx.fillStyle = "#976F0F";
ctx.moveTo(100,100);
ctx.quadraticCurveTo(70,115,100,130);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#976F0F";
ctx.moveTo(300,100);
ctx.quadraticCurveTo(330,115,300,130);
ctx.fill();

// Tête
ctx.beginPath();
ctx.fillStyle = "#976F0F";
ctx.arc(200,70,40,0,Math.PI*2,true);
ctx.fill();

// Yeux
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(185,60,6,0,Math.PI*2,true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(215,60,6,0,Math.PI*2,true);
ctx.fill();

// Sourcils

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.arc(185,51,6,0,Math.PI,true);    // arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.arc(215,51,6,0,Math.PI,true);    // arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.stroke();

// Bouche
ctx.beginPath();
ctx.fillStyle="red";
ctx.moveTo(180,85);
ctx.quadraticCurveTo(200,95,220,85);
ctx.fill();

//Corps
ctx.fillStyle = "#976F0F";
ctx.fillRect(160,130,80,130);

//Boutons
ctx.beginPath();
ctx.fillStyle="purple";
ctx.arc(200,155,8,0,Math.PI*2,true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="purple";
ctx.arc(200,190,8,0,Math.PI*2,true);
ctx.fill();

//Jambes
ctx.fillStyle = "#976F0F";
ctx.fillRect(160,260,30,60);

ctx.fillStyle = "#976F0F";
ctx.fillRect(210,260,30,60);

// Pieds
ctx.beginPath();
ctx.fillStyle = "#976F0F";
ctx.moveTo(160,320);
ctx.quadraticCurveTo(175,330,190,320);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#976F0F";
ctx.moveTo(210,320);
ctx.quadraticCurveTo(225,330,240,320);
ctx.fill();

//Entrejambe
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(200,260,10,0,Math.PI,true);
ctx.fill();
