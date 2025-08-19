export class VisitorCounter {
  constructor() {
    this.webAppUrl = 'https://script.google.com/macros/s/AKfycbykhXHZYTnX08V_PiMT-2_2cA5z_a3jT3k8deWca9iL4LZHeUDUX4OWqEfE58qoZJWf/exec';
    this.init();
  }

  init() {
    setTimeout(() => {
      this.trackVisitor();
    }, 1000);
  }

  async trackVisitor() {
    try {
      await fetch(this.webAppUrl, {
        method: 'GET',
        mode: 'no-cors'
      });
      
      
      
    } catch (error) {
      console.warn('Visitor tracking failed:', error);
    }
  }
}
