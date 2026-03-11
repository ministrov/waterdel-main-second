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
      // console.log('click!!!!');
    }
  });

  function getScrollBarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  window.openPopup = function (popupId) {
    $('#' + popupId).addClass('open');

    const scrollbarWidth = getScrollBarWidth();

    console.log(scrollbarWidth);

    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollbarWidth}px`;
  };

  window.closePopup = function () {
    $('.popup').removeClass('open');

    $('body').removeClass('popup-open');

    setTimeout(function () {
      document.body.style.overflow = '';
      document.body.style.marginRight = '';
    }, 300);
  };

  $('[data-modal]').on('click', function (e) {
    e.preventDefault();
    var modalId = $(this).data('modal');
    console.log(modalId);
    openPopup(modalId);
  });

  $('.modal__close').on('click', function () {
    closePopup();
  });

  // Close popup when clicking outside (on popup-inner)

  $('.popup').on('click', function (e) {
    if (e.target === this) {
      closePopup();
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  // faq
});
