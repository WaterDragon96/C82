var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;


//canvas.getContext("2d").beginPath();
//canvas.getContext("2d").strokeStyle=color;
//canvas.getContext("2d").lineWidth=2;
//canvas.getContext("2d").arc(200,200,40,0,2*Math.PI);


//ctx.beginPath();
//ctx.strokeStyle=color;
//ctx.lineWidht=2;
//ctx.arc(200,200,40,0,2*Math.PI);
//ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e)
 {
 
mouseEvent="mouseDown";}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
 current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY - canvas.offsetTop;
 if (mouseEvent == "mouseDown") {
    ctx.beginPath();4
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
  
    console.log("La última posición de las coordenadas x, y = ");
    console.log("x = " + last_position_of_x + "y = " 
         + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
  
    console.log("Posición actual de las coordenadas x, y = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " 
            + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, 
            current_position_of_mouse_y);
    ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
    mouseEvent="mouseUP";
 }

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseleave";
}
