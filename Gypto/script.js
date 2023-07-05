var tl =gsap.timeline()

tl.from("#nav  ",{
    y:-40,
    duration:1,
    
    opacity: 0,
    stagger:.5
})
// tl.from("#nav h2 ",{
//     x:400,
//     duration:1,

//     opacity: 0,
//     stagger:.5
// })
// .from("#nav-part2 button ",{
//        y:50,
//     duration:1,
//     // delay:.1,
//      opacity: 0,
//     // stagger:.5
// })
.from("#circle-imgs img",{
    rotate:360,
    repeat:-1,
    duration:3,
    // yoyo:true,
    delay:.1,
     opacity:0
})

.from("#image img",{
    y:50,
    opacity:0,
    rotate:-15

})

.from("#btn",{
    opacity:0
})

.from("#remain-prt1 h1",{
    y:200,
    opacity:0,
    
     duration:1,
     stagger:.25
})
.from("#remain-prt1 h4",{
    x:-200,
    opacity:0,
    duration:1.5
})



 var tm =gsap.timeline()

tm.from("#page2 #full3",{
    
    
    y:-50,
    opacity:0,
    scale:.89,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #full3",
        scroller:"body",
        // markers:true,
        scrub:3,
        
    }
})
// tm.from("#page2 h2",{
//    y:80,
//    opacity:0,
//    duration:2,
//    delay:.1,
// })

// .from("#page2 h4",{
//     y:20,
//     opacity:0,
//    duration:1
// })

// .from("#page2 img",{
//     y:30,
//     duration:1,
//     opacity:0
// })


// .from("#page2 h3",{
//     y:30,
//     duration:1,
//     opacity:0
// })
// .from("#page2 h5",{
//     y:30,
//     duration:1,
//     opacity:0
// })


gsap.from("#page4-part1 ",{
    scale:.85,
    width:"100%",
    duration:1.5,
    scrollTrigger:{
        trigger:" #page4-part1 ",
        scroller:"body",
        scrub:true,
        
    }
})


gsap.from(" #page4 #page4-part1 img",{
    scale:1,
    rotate:-100,
    duration:1.5,
    scrollTrigger:{
        trigger:" #page4 #page4-part1 img",
        scroller:"body",
        scrub:true
    }
})

var change = document.querySelector("button")
  
change.addEventListener("mouseenter",function(){
    change.style.backgroundColor ="#BCF3FF"    
    change.style.color= "#000511"
})

change.addEventListener("mouseleave",function(){
    change.style.backgroundColor ="#000511"
    change.style.color= "#BCF3FF"
})

// var tip=document.querySelector("#page3-part1 img")

// tip.addEventListener("mouseenter",function(){
//     tip.style.scale=1.8
// })

// tip.addEventListener("mouseleave",function(){
//     tip.style.scale=""
// })

// var tip=document.querySelectorAll("#page5-part2 #icons")

// tip.forEach(function(e){
//     // console.log(e.childNodes[11])
//    e.childNodes[11]
//    e.addEventListener("mouseenter",function(){
//       e.childNodes[11].style.border="1px solid #fff"
//    })
//    e.addEventListener("mouseleave",function(){
//     e.childNodes[11].style.border=""
//  })
// })

// var tip=document.querySelectorAll("#icons ")
// // var cick=document.querySelector("i")
// tip.forEach(function(a){

//     var cick=a.childNodes[1,3,5,7] 
//     a.addEventListener("mouseenter",function(){
//         cick.style.border="1px solid yellow"
//         cick.style.transition =.5
//     })
//     a.addEventListener("mouseleave",function(){
//         cick.style.border=""
//         cick.style.transition =.5
//     })
// })




// var cick=a.childNodes[3] 
//     a.addEventListener("mouseenter",function(a){
//         cick.style.border="1px solid yellow"
//         cick.style.transition =.5
//     })
//     a.addEventListener("mouseleave",function(a){
//         cick.style.border=""
//         cick.style.transition =.5
//     })

//     var cick=a.childNodes[5] 
//     a.addEventListener("mouseenter",function(a){
//         cick.style.border="1px solid yellow"
//         cick.style.transition =.5
//     })
//     a.addEventListener("mouseleave",function(a){
//         cick.style.border=""
//         cick.style.transition =.5
//     })

//     var cick=a.childNodes[7] 
//     a.addEventListener("mouseenter",function(a){
//         cick.style.border="1px solid yellow"
//         cick.style.transition =.5
//     })
//     a.addEventListener("mouseleave",function(a){
//         cick.style.border=""
//         cick.style.transition =.5
//     })
// })