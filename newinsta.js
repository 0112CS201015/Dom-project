var arr=[
  {img1:"https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1496360650824-229a83e340db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" },
  {img1:"https://images.unsplash.com/photo-1496360650824-229a83e340db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" },
  {img1:"https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
  {img1:"https://images.unsplash.com/photo-1496360650824-229a83e340db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" },
  {img1:"https://images.unsplash.com/photo-1496360650824-229a83e340db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" }
]

var clutter="";
arr.forEach(function(val,index){
    clutter+=`<div class="story">
    <img  id="${index}" src="${val.img1}" alt="">
</div>`
});
document.querySelector("#stories").innerHTML=clutter;
var timer=0;
document.querySelector("#stories").
addEventListener("click",function(details){
    document.querySelector("#fs").style.display="initial";
    document.querySelector("#fs img").setAttribute("src",arr[details.target.id].img1);
    document.querySelector("#showing #progress").style.width=0+"%";
    clearTimeout(timer);
    runTime();

})
function runTime(){
  var progress=0;
 timer= setInterval(function(){
    if(progress<100){
    progress++;
    document.querySelector("#showing #progress").style.width=progress+"%";
    }
  },30);

  setTimeout(function(){
    document.querySelector("#fs").style.display="none";
  },3000);
}
