export class Navigation {
  constructor() {
    this.init();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  smoothScrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  setActiveLink(clickedLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    clickedLink.classList.add('active');
  }

  init() {
    // Portfolio button scroll up
    document.querySelector('.nav-brand').addEventListener('click', (e) => {
      e.preventDefault();
      this.scrollToTop();
    });

    // Smooth scroll and active link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        this.smoothScrollToSection(targetId);
        this.setActiveLink(link);
      });
    });
  }
}
