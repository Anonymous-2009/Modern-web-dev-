const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".bounding-element", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.5,
    })
    .from("#hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

firstPageAnim()

// script for cicele mouse follower 
/*function circleMouseFollower(){
  window.addEventListener('mousemove', function(details){
   document.querySelector('.circle').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;

    }
}*/

