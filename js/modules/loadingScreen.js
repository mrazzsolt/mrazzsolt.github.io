export class LoadingScreen {
  constructor() {
    this.init();
  }

  init() {
    setTimeout(() => {
      this.hideLoader();
    }, 2000);
  }

  hideLoader() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.5s ease-out';
      
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
    
    if (mainContent) {
      mainContent.style.display = 'block';
      mainContent.style.opacity = '1';
    }
  }
}
