$(document).ready(function() {
  $('.hero-area > .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    cssEase: 'ease-in-out',
    lazyLoad: 'ondemand',
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 10000,
    touchMove: false,
    draggable: false,
    arrows: false,
    dots: false,
    fade: true,
    pauseOnHover: false
  });
});
