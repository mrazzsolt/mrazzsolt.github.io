export class ProfileZoom {
  constructor() {
    this.overlay = null;
    this.profilePicture = document.querySelector('.profile-picture img');
    this.profileContainer = document.querySelector('.profile-picture');
    this.init();
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'zoom-overlay';
    document.body.appendChild(this.overlay);
  }

  closeZoom() {
    this.profilePicture.classList.remove('zoomed');
    this.profileContainer.classList.remove('zoom-disabled');
    this.overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.body.classList.remove('zoom-active');
  }

  openZoom() {
    this.profilePicture.classList.add('zoomed');
    this.profileContainer.classList.add('zoom-disabled');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('zoom-active');
  }

  toggleZoom() {
    if (this.profilePicture.classList.contains('zoomed')) {
      this.closeZoom();
    } else {
      this.openZoom();
    }
  }

  init() {
    this.createOverlay();

    // Profile picture click
    this.profilePicture.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleZoom();
    });

    // Overlay click
    this.overlay.addEventListener('click', () => this.closeZoom());

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.profilePicture.classList.contains('zoomed')) {
        this.closeZoom();
      }
    });

    // Click outside
    document.addEventListener('click', (e) => {
      if (this.profilePicture.classList.contains('zoomed') && 
          !this.profilePicture.contains(e.target) && 
          !this.profileContainer.contains(e.target)) {
        this.closeZoom();
      }
    });
  }
}
