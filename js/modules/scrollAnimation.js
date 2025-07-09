export class ScrollAnimation {
  constructor() {
    this.scrollElements = document.querySelectorAll('.fade-in-on-scroll');
    this.init();
  }

  elementInView(el, dividend = 1) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  }

  displayScrollElement(element) {
    element.classList.add('scrolled');
  }

  hideScrollElement(element) {
    element.classList.remove('scrolled');
  }

  handleScrollAnimation() {
    this.scrollElements.forEach((el) => {
      if (this.elementInView(el, 1.1)) {
        this.displayScrollElement(el);
      } else {
        this.hideScrollElement(el);
      }
    });
  }

  init() {
    window.addEventListener('scroll', () => {
      this.handleScrollAnimation();
    });

    // Initial check
    this.handleScrollAnimation();
  }
}
