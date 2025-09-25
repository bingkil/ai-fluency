/**
 * INFOGRAPHIC JAVASCRIPT LIBRARY
 * Common functionality for infographic pages
 * Author: Chris Prakoso - Augmented Humanity
 */

// ===================================================================
// THEME MANAGEMENT
// ===================================================================

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  body.setAttribute('data-theme', newTheme);
  
  // Update button icons
  const sunIcon = document.querySelector('.theme-icon-sun');
  const moonIcon = document.querySelector('.theme-icon-moon');
  const themeStatus = document.getElementById('theme-status');
  
  if (newTheme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
    if (themeStatus) themeStatus.textContent = 'Current theme: dark mode';
  } else {
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
    if (themeStatus) themeStatus.textContent = 'Current theme: light mode';
  }
  
  // Save preference
  localStorage.setItem('theme', newTheme);
  
  // Announce theme change to screen readers
  announceToScreenReader(`Switched to ${newTheme} theme`);
}

/**
 * Initialize theme on page load
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themeStatus = document.getElementById('theme-status');
  
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      document.querySelector('.theme-icon-sun').style.display = 'none';
      document.querySelector('.theme-icon-moon').style.display = 'inline';
      if (themeStatus) themeStatus.textContent = 'Current theme: dark mode';
    } else {
      if (themeStatus) themeStatus.textContent = 'Current theme: light mode';
    }
  } else if (prefersDark) {
    // Auto-detect system preference
    document.body.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-icon-sun').style.display = 'none';
    document.querySelector('.theme-icon-moon').style.display = 'inline';
    if (themeStatus) themeStatus.textContent = 'Current theme: dark mode';
  }
}

/**
 * Listen for system theme changes
 */
function setupSystemThemeListener() {
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        
        const sunIcon = document.querySelector('.theme-icon-sun');
        const moonIcon = document.querySelector('.theme-icon-moon');
        const themeStatus = document.getElementById('theme-status');
        
        if (newTheme === 'dark') {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'inline';
          if (themeStatus) themeStatus.textContent = 'Current theme: dark mode';
        } else {
          sunIcon.style.display = 'inline';
          moonIcon.style.display = 'none';
          if (themeStatus) themeStatus.textContent = 'Current theme: light mode';
        }
      }
    });
  }
}

// ===================================================================
// ACCESSIBILITY UTILITIES
// ===================================================================

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// ===================================================================
// ANIMATION UTILITIES
// ===================================================================

/**
 * Setup intersection observer for animations
 */
function setupAnimationObserver() {
  const cards = document.querySelectorAll('.card-shadow');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, {
    threshold: 0.1
  });
  
  cards.forEach((card) => {
    observer.observe(card);
  });
}

// ===================================================================
// CLIPBOARD UTILITIES
// ===================================================================

/**
 * Copy current page URL to clipboard
 */
function copyToClipboard() {
  const url = window.location.href;
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => {
      showCopyNotification();
    }).catch((err) => {
      console.error('Failed to copy: ', err);
      fallbackCopyTextToClipboard(url);
    });
  } else {
    fallbackCopyTextToClipboard(url);
  }
}

/**
 * Fallback method for copying text to clipboard
 * @param {string} text - Text to copy
 */
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showCopyNotification();
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }
  
  document.body.removeChild(textArea);
}

/**
 * Show copy success notification
 */
function showCopyNotification() {
  const notification = document.createElement('div');
  notification.textContent = 'Link copied to clipboard!';
  notification.className = 'fixed top-16 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-1001 text-sm font-medium';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-10px)';
    notification.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
  
  // Announce to screen readers
  announceToScreenReader('Link copied to clipboard');
}

// ===================================================================
// SOCIAL SHARING UTILITIES
// ===================================================================

/**
 * Update social media sharing URLs with current page URL
 */
function updateSharingUrls() {
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(document.title);
  
  // Update social media share URLs
  const twitterBtn = document.querySelector('a[href*="twitter.com"]');
  if (twitterBtn) {
    const currentHref = twitterBtn.getAttribute('href');
    const baseUrl = currentHref.split('&url=')[0];
    twitterBtn.href = `${baseUrl}&url=${currentUrl}`;
  }
  
  const linkedinBtn = document.querySelector('a[href*="linkedin.com"]');
  if (linkedinBtn) {
    linkedinBtn.href = `https://www.linkedin.com/feed/?shareActive=true&text=${shareText}%20${currentUrl}`;
  }
  
  const facebookBtn = document.querySelector('a[href*="facebook.com"]');
  if (facebookBtn) {
    facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  }
}

// ===================================================================
// PERFORMANCE UTILITIES
// ===================================================================

/**
 * Lazy load images with intersection observer
 */
function setupLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// ===================================================================
// KEYBOARD NAVIGATION
// ===================================================================

/**
 * Setup keyboard navigation for interactive elements
 */
function setupKeyboardNavigation() {
  // Handle escape key to close modals or focus traps
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close any open modals or dropdowns
      const openModals = document.querySelectorAll('[data-modal="open"]');
      openModals.forEach(modal => {
        modal.setAttribute('data-modal', 'closed');
      });
    }
  });
  
  // Handle tab navigation for skip links
  const skipLink = document.querySelector('a[href="#main-content"]');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
  }
}

// ===================================================================
// INITIALIZATION
// ===================================================================

/**
 * Initialize all infographic functionality
 */
function initializeInfographic() {
  // Theme management
  initializeTheme();
  setupSystemThemeListener();
  
  // Animations
  setupAnimationObserver();
  
  // Social sharing
  updateSharingUrls();
  
  // Performance
  setupLazyLoading();
  
  // Accessibility
  setupKeyboardNavigation();
  
  // Log initialization
  console.log('Infographic initialized successfully');
}

// ===================================================================
// EVENT LISTENERS
// ===================================================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeInfographic);

// Update sharing URLs when page is fully loaded
window.addEventListener('load', updateSharingUrls);

// Handle visibility change for performance optimization
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Page is hidden - pause animations or heavy operations
    console.log('Page hidden - optimizing performance');
  } else {
    // Page is visible - resume normal operations
    console.log('Page visible - resuming normal operations');
  }
});

// ===================================================================
// EXPORT FOR MODULE USAGE (if needed)
// ===================================================================

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleTheme,
    copyToClipboard,
    announceToScreenReader,
    updateSharingUrls,
    initializeInfographic
  };
}