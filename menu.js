// MENU (shared on all pages)
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const menuContainer = document.querySelector('.menu-container');

  if (menuButton && menuContainer) {
    // Toggle menu on button click
    menuButton.addEventListener('click', function (e) {
      e.stopPropagation();
      menuContainer.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!menuContainer.contains(e.target)) {
        menuContainer.classList.remove('show');
      }
    });
  }
});
