// hamburger js

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.style.overflow="hidden";
});





// SCROLL ANIMATION USING INTERSECTION OBSERVER

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

document
    .querySelectorAll(
        ".reveal-up, .reveal-down, .reveal-left, .reveal-right, .zoom-fade, .flip-x, .flip-y, .skew, .blur-in, .pop"
    )
    .forEach(el => observer.observe(el));







// hero js

const slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 5000);








// trusted partner's js 

const trustSlides = document.querySelectorAll(".trust-slide");
let trustIndex = 0;

setInterval(() => {
  trustSlides[trustIndex].classList.remove("active");
  trustIndex = (trustIndex + 1) % trustSlides.length;
  trustSlides[trustIndex].classList.add("active");
}, 5000);








// easy steps js

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
  const question = item.querySelector(".faq-question");
  const symbol = question.querySelector("span");

  question.addEventListener("click", () => {

    // close all others
    faqs.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove("active");
        faq.querySelector("span").textContent = "+";
      }
    });

    // toggle current
    item.classList.toggle("active");
    symbol.textContent = item.classList.contains("active") ? "−" : "+";
  });
});










// testimonial js 

const images = document.querySelectorAll('.testimonial-image');
const box = document.getElementById('testimonial-box');
const text = document.getElementById('testimonial-text');
const name = document.getElementById('testimonial-name');

// Function to show testimonial for a given image
function showTestimonial(img) {
  text.textContent = img.getAttribute('data-text');
  name.textContent = img.getAttribute('data-name');
  box.classList.add('show');
}

// Show first image's testimonial by default
showTestimonial(images[0]);

// Hover effect to show respective testimonial
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    showTestimonial(img);
  });
});

