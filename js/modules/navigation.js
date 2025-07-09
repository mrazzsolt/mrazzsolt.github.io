export class Navigation {
  constructor() {
    this.sections = document.querySelectorAll('section[id]');
    this.navLinks = document.querySelectorAll('.nav-link');
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

  setActiveLink(activeHref) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === activeHref) {
        link.classList.add('active');
      }
    });
  }

  getCurrentSection() {
    let current = '';
    const scrollPosition = window.scrollY + 150; // Offset a navbar magasságához
    
    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    // Ha az oldal alján vagyunk, aktiváld a contact szekciót
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        current = 'contact';
      }
    }

    return current;
  }

  updateActiveNavigation() {
    const currentSection = this.getCurrentSection();
    
    if (currentSection) {
      this.setActiveLink(`#${currentSection}`);
    }
  }

  init() {
    // Portfolio button scroll up
    document.querySelector('.nav-brand').addEventListener('click', (e) => {
      e.preventDefault();
      this.scrollToTop();
    });

    // Smooth scroll and active link
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        this.smoothScrollToSection(targetId);
      });
    });

    // Scroll listener for active navigation
    window.addEventListener('scroll', () => {
      this.updateActiveNavigation();
    });

    // Initial check
    this.updateActiveNavigation();
  }
}
