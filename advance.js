var arr=[
    {name:"Akrati",img:"https://plus.unsplash.com/premium_photo-1663054609755-5be53e6d599a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",status:"Stranger"},
        {name:"Anubhav",img:"https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",status:"Stranger"},
        {name:"Rishika",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",status:"Stranger"},

];
function abc(){
var clutter="";
arr.forEach(function(val,index){
   clutter+=`<div class="card">
   <img src="${val.img}" alt="">
   <h1>${val.name}</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi provident vero consequatur ratione, id sequi repellat incidunt temporibus soluta.</p>
   <h5 id=${val.status.split(" ").join("")}>${val.status}</h5>
   <button class=${val.status==="Stranger" ?"blue" : "red"} id=${index} >${val.status=="Stranger" ? "Add Friends": "Remove Friends"}</button>
</div>`
})
document.querySelector("#cards").innerHTML=clutter;
}
abc();
var a=0;
document.querySelector("#cards").addEventListener("click",function(details){
        if(a==0){
       arr[details.target.id].status="Friends request send";
        setTimeout(function(){
                arr[details.target.id].status="Friends";
                abc();
        },2000);
        abc();
       a=1;
        }
        else{
                arr[details.target.id].status="Stranger";
                abc();
                a=0;    
        }
})
