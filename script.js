// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
        hamburger.classList.remove("active");
      }
    }
  });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
    // Scroll Down
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    navbar.classList.contains("scroll-down")
  ) {
    // Scroll Up
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Here you would typically send the form data to a server
    console.log("Form submitted:", formObject);

    // Show success message
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });
}

// Animate elements when they come into view
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add loading animation to images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.classList.add("loaded");
  });
});
