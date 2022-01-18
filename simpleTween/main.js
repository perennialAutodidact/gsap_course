TweenMax.to($(".circle"), 1, {
  x: 150,
  y: 150,
  backgroundColor: "blue",
});

TweenMax.to($(".square"), 2, {
  x: -150,
  y: -150,
  scale: 2,
  delay: 1,
  ease: Back.easeOut,
});

TweenMax.from($(".rectangle"), 2, { y: 200, rotation: 180, scale: 1.5 });

TweenMax.to($("li:nth-child(2n+1)"), 1, { x: 50 });
