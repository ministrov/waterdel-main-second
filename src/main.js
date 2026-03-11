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

  // Close mobile menu when clicking close button
  $('.mobile-menu__close').on('click', function () {
    closeMobileMenu();
  });

  // Close mobile menu when clicking on links inside
  $('.header__mobile-menu a').on('click', function () {
    closeMobileMenu();
  });

  // Close mobile menu when clicking outside
  $(document).on('click', function (e) {
    if (
      !$(e.target).closest('.header__mobile-menu, #mobile-menu-burger').length
    ) {
      closeMobileMenu();
      console.log('click!!!!');
    }
  });
});
