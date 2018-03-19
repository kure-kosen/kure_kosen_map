var timer, kakudo = 0;

var get_dir = function() {
  window.addEventListener('deviceorientation', function(e) {
    kakudo = e.webkitCompassHeading;
    view.animate({
      rotation: kakudo * Math.PI / 180
    });
  });
}

$('#direction').on('change', function() {
  if($('#direction').prop("checked")) {
    timer = setInterval(get_dir, 500);
  } else {
    clearInterval(timer);
    kakudo = 0;
    view.animate({
      rotation: 0
    });
  }
});
