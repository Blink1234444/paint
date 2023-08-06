var evento_mouse="empty";
var posx, posy,tposx,tposy;
var ancho= screen.width;
ntancho=screen.width-70;
ntlargo=screen.height-300;
canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

color = "black"; 
linea=1;
/* se utiliza para hacer circulos
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();    */

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

    color = document.getElementById("color").value;
    linea = document.getElementById("linea").value;
    evento_mouse="mousedown";
   
	
  /* se utiliza para hacer circulos
    mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    */
}
/*se utiliza para hacer circulos
function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}
*/
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    evento_mouse="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    evento_mouse="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cposx = e.clientX - canvas.offsetLeft;
    cposy = e.clientY - canvas.offsetTop;

    if ( evento_mouse == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linea;

    ctx.moveTo(posx, posy);
    ctx.lineTo(cposx,cposy);
    ctx.stroke();
    }
    posx=cposx;
    posy=cposy;


}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// Empieza codigo para pantalla touch

if (ancho<992)
{
    document.getElementById("myCanvas").width=ntancho;
    document.getElementById("myCanvas").height=ntlargo;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color= document.getElementById("color").value;
    linea= document.getElementById("linea").value;
    tposx=e.touches[0].clientX - canvas.offsetLeft;
    tposy=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    ctposx=e.touches[0].clientX - canvas.offsetLeft;
    ctposy=e.touches[0].clientY - canvas.offsetTop;

   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linea;

    ctx.moveTo(tposx, tposy);
    ctx.lineTo(ctposx,ctposy);
    ctx.stroke();
    tposx=ctposx;
    tposy=ctposy;
}


