gsap.to("#nav",{
    backgroundColor : "black",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
 })

 gsap.to("#main",{
    backgroundColor:"#0a2351",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%"
    }
 })

 