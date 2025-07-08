//Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function updateButton() {
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light';
  } else {
    themeToggle.textContent = '🌙 Dark';
  }
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateButton();
  
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'true') {
    body.classList.add('dark-mode');
  }
  updateButton();
});

// Portfolio button scroll up
document.querySelector('.nav-brand').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scroll and active link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Active link styling
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


// Scroll animation
const scrollElements = document.querySelectorAll('.fade-in-on-scroll');
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.1)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

handleScrollAnimation();
