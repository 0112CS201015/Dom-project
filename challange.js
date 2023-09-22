t1=gsap.timeline();
t1
.to("img",{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        markers:true,
        scrub:1,
    },
    top:"-10%",
    ease:Expo.easeInOut
   
},"a")
.to("#box1 h1",{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        markers:true,
        scrub:1,      
    },
    marginTop:"-10.6%",
    ease:Power3,
},"a")
.to("#box2 h1",{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        markers:true,
        scrub:2,
        
    },
    marginTop:"-10.1%",
    ease:Power3,
},"a")
.to("#box3 h1",{
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        markers:true,
        scrub:1,
    },
   marginTop:"-10.4%",
    ease:Power3,
},"a")


