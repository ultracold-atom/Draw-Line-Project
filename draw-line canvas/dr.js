
var clearBtn = document.querySelector(".clearBtn")
var colors = document.getElementById("colors")
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "16px Arial";

let canvasX 
let canvasY

let xBegin
let yBegin
let xEnd
let yEnd

let cRect = canvas.getBoundingClientRect(); 

// Line parameters
ctx.lineWidth //Smallest width value
let lineColor 
let isMouseClicked 

document.querySelector(".increase").addEventListener("click",function(){
    ctx.lineWidth++
})


document.querySelector(".decrease").addEventListener("click",function(){
    if(ctx.lineWidth>-1){
      ctx.lineWidth--
    }
    console.log(ctx.lineWidth)
})


canvas.addEventListener('mousedown',function(e){
    // For selecting color values
    var x = colors.selectedIndex;
    lineColor = colors.options[x].value
    
    ctx.strokeStyle = lineColor;
    ctx.lineCap = "round"

    isMouseClicked = true
    // Starting to draw line
    xBegin = Math.round(e.clientX-cRect.left);
    yBegin =  Math.round(e.clientY-cRect.top);
    ctx.beginPath();
    ctx.moveTo(xBegin, yBegin);
})
 

canvas.addEventListener("mousemove", function(e) { 
  if(isMouseClicked){
    canvasX = Math.round(e.clientX-cRect.left);
    canvasY = Math.round(e.clientY-cRect.top);       
    ctx.lineTo(canvasX,canvasY);
    ctx.stroke()    
    }
})  
    

canvas.addEventListener('mouseup',function(e){
    isMouseClicked = false
})
    
clearBtn.addEventListener('click',function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})



