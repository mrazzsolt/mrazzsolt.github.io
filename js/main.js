import { ThemeToggle } from './modules/themeToggle.js';
import { Navigation } from './modules/navigation.js';
import { ScrollAnimation } from './modules/scrollAnimation.js';
import { ProfileZoom } from './modules/profileZoom.js';
import { HamburgerMenu } from './modules/hamburgerMenu.js';
import { DOMUtils } from './utils/domUtils.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    DOMUtils.ready(() => {
      new ThemeToggle();
      new Navigation();
      new ScrollAnimation();
      new ProfileZoom();
      new HamburgerMenu();
    });
  }
}

// Initialize the application
new App();
