$(document).ready(function() {
  if (window.location.href.includes('/') || window.location.href.includes('index.html')) {
    $('.alto-header-content button').on('click', function (e) {
      e.preventDefault();
      $('#altoHeaderMainMenu').toggle();
      $('.alto-header-content').toggleClass('is-active');
      $('.alto-header-wrapper').toggleClass('theme-pink is-open');
      $('.alto-header').toggleClass('is-open');
    });
  }
});
// theme - dark is - open