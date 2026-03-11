jQuery(document).ready(function ($) {
  // Mobile menu toggle
  $('#mobile-menu-burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header__mobile-menu').toggleClass('active');
  });

  // Close mobile menu function
  function closeMobileMenu() {
    $('#mobile-menu-burger').removeClass('active');
    $('.header__mobile-menu').removeClass('active');
  }

  $('.mobile-menu__close').on('click', function () {
    closeMobileMenu();
  });
});
