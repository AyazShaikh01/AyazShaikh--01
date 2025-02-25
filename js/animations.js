function marqueAnimation(){
    window.addEventListener("wheel", (e) => {
        console.log(e.deltaY);
        if (e.deltaY > 0) {
          gsap.to(".marquee", {
            transform: `translateX(-200%)`, 
            duration: 4.5,
            ease: "none",
            repeat: -1,
          });
          gsap.to('.logo', {
            transform: `scaleX(-1)`, 
              ease: "none",
          });
        } else {
          const emoji = document.querySelector('.logo')
      
          gsap.to(".marquee", {
              transform: `translateX(0%)`,
              duration: 4.5,
              ease: "none",
              repeat: -1,
          });
          gsap.to('.logo', {
            transform: `scaleX(1)`, 
              ease: "none",
          })
        }
      });
     
}

marqueAnimation();