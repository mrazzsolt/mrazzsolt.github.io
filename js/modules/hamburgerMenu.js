export class HamburgerMenu {
  constructor() {
    this.hamburger = null;
    this.navLinks = document.querySelector('.nav-links');
    this.navContainer = document.querySelector('.nav-container');
    this.init();
  }

  createHamburger() {
    this.hamburger = document.createElement('div');
    this.hamburger.classList.add('hamburger');

    // Create three vertical lines
    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      this.hamburger.appendChild(line);
    }

    this.navContainer.insertBefore(this.hamburger, this.navLinks);
  }

  toggleMenu() {
    this.navLinks.classList.toggle('active');
  }

  closeMenu() {
    this.navLinks.classList.remove('active');
  }

  init() {
    this.createHamburger();

    // Toggle menu on hamburger click
    this.hamburger.addEventListener('click', () => {
      this.toggleMenu();
    });

    // Close menu when clicking a nav link
    this.navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.navContainer.contains(e.target)) {
        this.closeMenu();
      }
    });
  }
}
