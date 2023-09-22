 gsap.from("#left",{
    width:0,
    duration:2,
    ease:Expo.easeIn
});
gsap.from("#right",{
    width:0,
    duration:2,
    ease:Expo.easeIn,
    delay:2
}); 
gsap.from("#box",{
    width:"300px",
    clipPath:"polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
    left:"10%",
    top:"10%",
    duration:5,
    opacity:0,
    ease:"bounce.out",
    delay:4
   
})