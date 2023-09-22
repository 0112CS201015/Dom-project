gsap.set(".a",{opacity:0})
gsap.to(".b",{
    scrollTrigger:{
       trigger:"#home",
       start:"top top",
    //    markers:true,
       scrub:2,
       end:"bottom 10%"
    },
    opacity:0,
    ease:Expo.easeInOut,
    stagger:.6,
    duration:2
})
gsap.to("#second img",{
    scrollTrigger :{
      trigger:"#second",
      start:"top top",
   markers:true,
      scrub:3,
      end:"center 30%"
    },
    width:"35%",
    ease:Expo.easeInOut,
    duration:2
})
gsap.to(".a",{
    scrollTrigger:{
     trigger:"#second",
     start:"center 3%",
     scrub:1,
     end:"bottom 30%",
        
    },
    opacity:1,
    ease:Expo.easeInOut,
    stagger:.1,
    duration:2
})