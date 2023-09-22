var arr=[
    {dp:"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", Stories:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
    {dp:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", Stories:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
    {dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", Stories:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}
]
var clutter="";
arr.forEach(function(val,index){
       clutter+=`<div class="stories">
       <div id="outer">
           <div id="inner">
               <img  id="${index}" src="${val.dp}" alt="">
           </div>
       </div>
   </div>`
})
var timer=0;
document.querySelector("#story").innerHTML=clutter;
document.querySelector("#story")
.addEventListener("click",function(details){
     document.querySelector("#fs img").setAttribute("src",arr[details.target.id].Stories);
     document.querySelector("#fs").style.display="flex";
     document.querySelector("#sliding #progress").style.width=0+"%";
     clearInterval(timer);
    
     runTime();
})

function  runTime(){
    var progress=0;
   timer= setInterval(function(){
        if(progress<100){
         progress++;
         document.querySelector("#sliding #progress").style.width=progress+"%";
        }
    },30);
     setTimeout(function(){
        document.querySelector("#fs").style.display="none";
  
     },3000)

}