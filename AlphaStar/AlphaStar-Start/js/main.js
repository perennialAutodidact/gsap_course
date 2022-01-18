// transform burger icon on hover
$(".burgerIcon").hover(
  function () {
    TweenMax.to(".burgerLine:first-child", 0.2, { x: -10 });
    TweenMax.to(".burgerLine:last-child", 0.2, { x: 10 });
  },
  function () {
    TweenMax.to(".burgerLine:first-child", 0.2, { x: 0 });
    TweenMax.to(".burgerLine:last-child", 0.2, { x: 0 });
  }
);

// full screen nav when burger icon is clicked
let navTimeline = new TimelineMax({ paused: true });

navTimeline
  .to("nav", 0.3, {
    autoAlpha: 1,
  })
  .staggerFromTo(
    $("li"),
    0.3,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 },
    0.1
  );

$(".burgerIcon").click(() => {
  navTimeline.play(0);
});

$(".closeButton").click(() => {
  navTimeline.reverse(0);
});

// fade in hero section and CTA button
TweenMax.fromTo(
  "#hero h1",
  0.6,
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, delay: 1 }
);

TweenMax.fromTo(
  "#hero .learnMoreButton",
  0.6,
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, delay: 1.6, ease: Back.easeOut }
);

// 4-column card section
$(".fourColItem").hover(
  function () {
    TweenMax.to($(this), 0.5, { y: -10, scale: 1.03 });
    TweenMax.to($(this), 0.5, { boxShadow: "0 0 20px rgba(0,0,0,0.36)" });
  },
  function () {
    TweenMax.to($(this), 0.5, { y: 0, scale: 1 });
    TweenMax.to($(this), 0.5, { boxShadow: "0 0 20px rgba(0,0,0,0.06)" });
  }
);


// 3-column card section
TweenMax.set('.serviceBoxInner', { y: 200, opacity: 0 })

$('.serviceBox').hover(function(){
  TweenMax.to($(this).find('.serviceBoxInner'), 0.3, {
    y: 0,
    opacity: 1,
    ease: Power2.easeOut
  })
},
function(){
  TweenMax.to($(this).find('.serviceBoxInner'), 0.3, {
    y: 200,
    opacity: 0,
    ease: Power2.easeOut
  })
})

// Rotating cogs
TweenMax.to('.cogLeft', 10, {rotation: 360, repeat: -1, ease: Linear.easeNone})
TweenMax.to('.cogRight', 10, {rotation: -360, repeat: -1, ease: Linear.easeNone})