var count=0;
// var a=
var b=document.querySelector("h5");
setInterval(function(){
    if(count<100){
    count++;
          document.querySelector("#progress").style.width=count+"%";
          document.querySelector("#center h5" ).innerHTML=count+"%";
          document.querySelector("#center h5" ).style.color="rgb(127, 192, 127)";
        
         
       

    }
},200)