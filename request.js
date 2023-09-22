var btn=document.querySelector(".card button");
var h5=document.querySelector(".card h5");
var flag=0;
var timer;
btn.addEventListener("click",function(){
    if(flag==0){
        h5.innerHTML="request loading.......";
        h5.style.color="yellow";
        btn.innerHTML="Cancal";
        btn.style.backgroundColor="green";
         timer=setTimeout(function(){
            h5.innerHTML="Friends";
            h5.style.color="green";
            btn.innerHTML="Remove";
            btn.style.backgroundColor="red";
           },1000)
           flag=1;
    }
    else{
        h5.innerHTML="Stranger";
        h5.style.color="red";
        btn.style.backgroundColor="rgb(0, 225, 255) ";
    clearTimeout(timer);
        btn.innerHTML="Add Friend";
        flag=0;
    }
})


var b=0;
var menu=document.querySelector("#menu");
var drop=document.querySelector("#drop");

menu.addEventListener("click",function(){
    if(b==0){
        drop.style.opacity="1";
        drop.style.top="20%";
       document.querySelector("#line1").style.rotate="55deg";
       document.querySelector("#line2").style.opacity="0";
       document.querySelector("#line3").style.rotate="-60deg";
       
       
        b=1;
        }
        else{
            drop.style.opacity="0";
            drop.style.top="-12%";
            document.querySelector("#line1").style.rotate="0deg";
            document.querySelector("#line2").style.opacity="1";
            document.querySelector("#line3").style.rotate="0deg";
            b=0;
        }
})


var botn=document.querySelector("#btn");
var card=document.querySelector(".card");
var a=0;
botn.addEventListener("click",function(){
    if(a==0){
    card.style.opacity="1";
    card.style.top="50%";
    a=1;
    }
    else{
        card.style.opacity="0";
        card.style.top="-20%";
        a=0;
    }
})