// js/modules/imageProtection.js
export class ImageProtection {
  constructor() {
    this.init();
  }

  disableRightClick() {
    document.addEventListener('contextmenu', (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    });
  }

  disableDragDrop() {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
      });
    });
  }

  init() {
    this.disableRightClick();
    this.disableDragDrop();
  }
}