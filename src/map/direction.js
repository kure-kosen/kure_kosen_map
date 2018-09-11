const changeDirection = map => {
  let kakudo = 0
  let timerArray = []

  let get_dir = () => {
    window.addEventListener('deviceorientation', e => {
      kakudo = e.webkitCompassHeading
      map.getView().animate({
        rotation: (kakudo * Math.PI) / 180
      })
    })
  }

  $('#direction').on('change', () => {
    if ($('#direction').prop('checked')) {
      start_interval()
    } else {
      stop_interval()
      kakudo = 0
      map.getView().animate({
        rotation: 0
      })
    }
  })

  const start_interval = () => {
    timerArray.push(setInterval(get_dir, 500))
  }

  const stop_interval = () => {
    if (timerArray.length > 0) {
      for (let i = 0, j = timerArray.length; i < j; i++) {
        clearInterval(timerArray.shift())
      }
    }
  }
}

export default changeDirection
