var menu=document.querySelector("#menu");
var fill=document.querySelector("#fill");
var a=false;
menu.addEventListener("click",function(){
   if(a==false){
    fill.style.top="10%";
    document.querySelector("#line1").style.rotate="55deg";
    document.querySelector("#line2").style.opacity="0";
    document.querySelector("#line3").style.rotate="-60deg";
    a=true;
   }
   else{
    fill.style.top="-100%";
    document.querySelector("#line1").style.rotate="0deg";
    document.querySelector("#line2").style.opacity="1";
    document.querySelector("#line3").style.rotate="0deg";
    a=false;
   }
  
})
