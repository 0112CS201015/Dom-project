 var btn=document.querySelector("#btn");
 var model=document.querySelector("#model");
 var a=false;
 btn.addEventListener("click",function(){
    if(a==false){
    model.style.opacity="1";
    model.style.top="30%"
    a=true;
    btn.style.color="black";
    btn.style.innerHtml="hyty";
    }
else {
    model.style.opacity="0";
    model.style.top="-30%"
    btn.style.color="white";
    a=false;
}
   
 })