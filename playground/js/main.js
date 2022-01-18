// PART 9
//
// TweenMax.from('.circle', 1, {x:-100})
// TweenMax.from('.square', 1, {x:-100, delay: .5})
// TweenMax.from('.rectangle', 1, {x:-100, delay: 1})

// let tlAnimation = new TimelineMax();

// tlAnimation
//   .from(".circle", 1, { x: -100, ease: Bounce.easeOut })
//   .from(".square", 1, { x: -100, ease: Bounce.easeOut })
//   .from(".rectangle", 1, { x: -100, ease: Bounce.easeOut });

// TweenMax
//   .staggerFrom('.triangle', 1, {
//     x: 200,
//     y:200,
//     opacity:0,
//     ease: Back.easeOut
//   }, 0.2)

// let tlAnimation2 = new TimelineMax({repeat:-1, yoyo: true})
// tlAnimation2
//   .set('.oval', {
//     x: -100
//   })
//   .to('.oval', 1, {x: 100})

// PART 10
//
// let tlShapes = new TimelineMax();

// tlShapes
//   .from(".circle", 1, { x: -100 })
//   .from(".square", 1, { x: -100 })
//   .from(".rectangle", 1, { x: -100 });

// PART 11
//
// let tlShapes = new TimelineMax()
// tlShapes
//   .staggerFrom('.shape', 0.5, { x: 50, y: 50, opacity: 0 }, .2)

// $('.playButton').click(()=>{
//   tlShapes.play();
// })

// $('.pauseButton').click(()=>{
//   tlShapes.pause();
// })

// $('.resumeButton').click(()=>{
//   tlShapes.resume();
// })

// $('.reverseButton').click(()=>{
//   tlShapes.reverse();
// })

// $('.slowButton').click(()=>{
//   tlShapes.timeScale(0.5);
// })

// $('.fastButton').click(()=>{
//   tlShapes.timeScale(5);
// })

// // jump to a specific time in the timeline
// $('.seekButton').click(()=>{
//   tlShapes.seek(2);
// })

// // jump to a specific progress mark 0% - 100%
// $('.progressButton').click(()=>{
//   tlShapes.progress(0.5);
// })

// PART 12
//
TweenMax.fromTo(".circle", 1, { x: -100, scale:0 }, { x: 100, scale: 1.5 });
TweenMax.staggerFromTo('.triangle', 1, {x:-100, y:-100,opacity:0}, {x:50, y: 50, opacity:1}, .2)