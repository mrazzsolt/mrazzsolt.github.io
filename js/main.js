import { LoadingScreen } from './modules/loadingScreen.js';
import { ThemeToggle } from './modules/themeToggle.js';
import { Navigation } from './modules/navigation.js';
import { ScrollAnimation } from './modules/scrollAnimation.js';
import { ProfileZoom } from './modules/profileZoom.js';
import { HamburgerMenu } from './modules/hamburgerMenu.js';
import { DOMUtils } from './utils/domUtils.js';
import { ImageProtection } from './modules/imageProtection.js';


class App {
  constructor() {
    this.init();
  }

  init() {
    new LoadingScreen();

    DOMUtils.ready(() => {
      new ThemeToggle();
      new Navigation();
      new ScrollAnimation();
      new ProfileZoom();
      new HamburgerMenu();
      new ImageProtection();
    });
  }
}

// Initialize the application
new App();
