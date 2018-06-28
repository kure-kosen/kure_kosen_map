var kakudo = 0,
  timerArray = new Array()

var get_dir = function() {
  window.addEventListener('deviceorientation', function(e) {
    kakudo = e.webkitCompassHeading
    view.animate({
      rotation: (kakudo * Math.PI) / 180
    })
  })
}

$('#direction').on('change', function() {
  if ($('#direction').prop('checked')) {
    start_interval()
  } else {
    stop_interval()
    kakudo = 0
    view.animate({
      rotation: 0
    })
  }
})

function start_interval() {
  timerArray.push(setInterval(get_dir, 500))
}

function stop_interval() {
  if (timerArray.length > 0) {
    for (var i = 0, j = timerArray.length; i < j; i++) {
      clearInterval(timerArray.shift())
    }
  }
}
