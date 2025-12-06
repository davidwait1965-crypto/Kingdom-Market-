// Load shared menu.html into every page and wire up behavior
(function () {
  function initMenu(menuContainer) {
    if (!menuContainer) return;

    const menuButton = menuContainer.querySelector('.menu-button');
    const links = menuContainer.querySelectorAll('.dropdown-content a');

    // Toggle open/close
    if (menuButton) {
      menuButton.addEventListener('click', function (e) {
        e.stopPropagation();
        menuContainer.classList.toggle('show');
      });

      // Close when clicking outside
      document.addEventListener('click', function (e) {
        if (!menuContainer.contains(e.target)) {
          menuContainer.classList.remove('show');
        }
      });
    }

    // Highlight current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
      }
    });
  }

  function loadMenu() {
    fetch('menu.html')
      .then((response) => response.text())
      .then((html) => {
        const wrap = document.createElement('div');
        wrap.innerHTML = html.trim();
        const menuContainer = wrap.firstElementChild;
        if (!menuContainer) return;

        // Insert at very top of <body>
        document.body.insertBefore(menuContainer, document.body.firstChild);
        initMenu(menuContainer);
      })
      .catch((err) => {
        console.error('Error loading menu.html:', err);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
  } else {
    loadMenu();
  }
})();
