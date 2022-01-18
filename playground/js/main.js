// TweenMax.from('.circle', 1, {x:-100})
// TweenMax.from('.square', 1, {x:-100, delay: .5})
// TweenMax.from('.rectangle', 1, {x:-100, delay: 1})

let tlAnimation = new TimelineMax();

tlAnimation
  .from(".circle", 1, { x: -100, ease: Bounce.easeOut })
  .from(".square", 1, { x: -100, ease: Bounce.easeOut })
  .from(".rectangle", 1, { x: -100, ease: Bounce.easeOut });

TweenMax
  .staggerFrom('.triangle', 1, { 
    x: 200,
    y:200,
    opacity:0,
    ease: Back.easeOut 
  }, 0.2)



let tlAnimation2 = new TimelineMax({repeat:-1, yoyo: true})
tlAnimation2
  .set('.oval', {
    x: -100
  })
  .to('.oval', 1, {x: 100})