// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  
  // Dark mode toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  function updateButton() {
    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️ Light';
    } else {
      themeToggle.textContent = '🌙 Dark';
    }
  }

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      updateButton();
      
      // Save theme preference to localStorage
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
    });
  }

  // Load saved theme preference on page load
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'true') {
    body.classList.add('dark-mode');
  }
  updateButton();

  // Portfolio brand button - scroll to top
  const navBrand = document.querySelector('.nav-brand');
  if (navBrand) {
    navBrand.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scroll navigation and active link styling
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Update active link styling
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Scroll animation functionality
  const scrollElements = document.querySelectorAll('.fade-in-on-scroll');
  
  // Check if element is in viewport
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  // Show element with animation
  const displayScrollElement = (element) => {
    element.classList.add('scrolled');
  };

  // Hide element animation
  const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
  };

  // Handle scroll animations
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.1)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // Initial animation check
  handleScrollAnimation();

  // Profile picture zoom functionality - with timeout for safety
  setTimeout(() => {
    const profilePicture = document.querySelector('.profile-picture img');
    const profileContainer = document.querySelector('.profile-picture');
    
    // Check if elements exist
    if (!profilePicture || !profileContainer) {
      console.log('Profile picture elements not found');
      return;
    }

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    document.body.appendChild(overlay);

    // Close zoom function
    function closeZoom() {
      profilePicture.classList.remove('zoomed');
      profileContainer.classList.remove('zoom-disabled');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
      document.body.classList.remove('zoom-active');
    }

    // Profile picture click event - toggle zoom
    profilePicture.addEventListener('click', (e) => {
      e.stopPropagation();
      
      if (profilePicture.classList.contains('zoomed')) {
        // If already zoomed, close it
        closeZoom();
      } else {
        // If not zoomed, open zoom
        profilePicture.classList.add('zoomed');
        profileContainer.classList.add('zoom-disabled');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('zoom-active');
      }
    });

    // Close zoom when clicking on overlay
    overlay.addEventListener('click', closeZoom);

    // Close zoom with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && profilePicture.classList.contains('zoomed')) {
        closeZoom();
      }
    });

    // Close zoom when clicking anywhere else
    document.addEventListener('click', (e) => {
      if (profilePicture.classList.contains('zoomed') && 
          !profilePicture.contains(e.target) && 
          !profileContainer.contains(e.target)) {
        closeZoom();
      }
    });
  }, 100); // 100ms delay for safety
});
