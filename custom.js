var main=document.querySelector("#main");
var circle=document.querySelector("#circ");
var h1=document.querySelector(" #main h1");
main.addEventListener("mousemove",function(val){
    circle.style.left=val.x+"px";
    circle.style.top=val.y+"px";
})

h1.addEventListener("mouseenter",function(){
    circle.style.width="1000px";
    circle.style.height="1000px";
})
h1.addEventListener("mouseleave",function(){
    circle.style.width="30px";
    circle.style.height="30px";
})