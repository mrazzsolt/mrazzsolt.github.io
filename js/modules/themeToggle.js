export class ThemeToggle {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.body = document.body;
    this.init();
  }

  updateButton() {
    if (this.body.classList.contains('dark-mode')) {
      this.themeToggle.textContent = '☀️ Light';
    } else {
      this.themeToggle.textContent = '🌙 Dark';
    }
  }

  toggle() {
    this.body.classList.toggle('dark-mode');
    this.updateButton();
    
    const isDark = this.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      this.body.classList.add('dark-mode');
    }
    this.updateButton();
  }

  init() {
    this.themeToggle.addEventListener('click', () => this.toggle());
    document.addEventListener('DOMContentLoaded', () => this.loadSavedTheme());
  }
}
