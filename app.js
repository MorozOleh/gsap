const tl = gsap.timeline({
  defaults: { duration: 0.75 },
});

tl.fromTo(
  '.cookie-container',
  { scale: 0 },
  { scale: 1, ease: 'elastic.out(1, 0.9)' }
);

tl.fromTo(
  '.cookie',
  { opacity: 0, x: -50, rotation: '-45deg' },
  { opacity: 1, x: 0, rotation: '0deg' },
  '<50%'
);

tl.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<');

//Cookie jump

tl.fromTo(
  '#crumbs',
  { y: 0 },
  { y: -15, yoyo: true, repeat: -1, ease: 'circ' }
);

// Fading the cookie out
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  gsap.to('.cookie-container', { opacity: 0, y: 100, duration: 0.75 });
});
