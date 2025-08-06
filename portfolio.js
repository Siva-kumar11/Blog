// You can add more interactive features here
console.log("Portfolio site loaded!");
// Animate on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

// Observe elements with fade/slide classes
document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});
