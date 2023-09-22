t1=gsap.timeline();
 
gsap.set(".a",{opacity:0, y:10})
gsap.set("#right .b",{opacity:0,y:10,scale:.9})
t1.
from("#left",{
    width:0,
    duration:1,
    ease:Expo.easeIn
})
.from("#right",{
    width:0,
    duration:1.5,
    ease:Expo.easeIn,
    delay:-1
})
.to(".a",{
    opacity:1,
    y:0,
    duration:1.5,
    stagger:.18,
    ease:Expo.easeIn,
})
.to("#right .b",{
        opacity:1,
        y:0,
        scale:1,
        duration:1.5,
        ease:Expo.easeIn,
        delay:-1
})