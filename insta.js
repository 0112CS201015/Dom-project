var post=document.querySelector("#post");
var love=document.querySelector("#div2 i");
var change=document.querySelector("#icons h4 ");
var a=false;
post.addEventListener("dblclick",function(){
    love.style.opacity="1";
    change.innerHTML='<i class="ri-heart-fill">';
    change.style.color="red";
    setTimeout(function(){
        love.style.opacity="0";
  },500)
})
var a=false;
change.addEventListener("click",function(){
    if(a==false){
    change.innerHTML='<i class="ri-heart-fill">';
    change.style.color="red";
    a=true;
    }
    else {
        change.innerHTML='<i class="ri-heart-line">';
        change.style.color="black";
        a=false;
    }
})