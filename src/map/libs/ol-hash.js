import { View } from 'ol'
import { fromLonLat, toLonLat } from 'ol/proj'

const hasher = ol => {
  if (!ol || ol.hash) return

  const encode = view => {
    let c = toLonLat(view.getCenter())
    let z = view.getZoom()
    let x = c[0].toFixed(6)
    let y = c[1].toFixed(6)
    return '#' + [z, y, x].join('/')
  }

  const decode = hash => {
    let view = null
    if (hash.match(/^#([0-9]+)\/(.+)\/(.+)$/)) {
      let z = parseInt(RegExp.$1)
      let y = parseFloat(RegExp.$2)
      let x = parseFloat(RegExp.$3)
      if (!isNaN(y) && !isNaN(x)) {
        view = View({
          center: fromLonLat([x, y]),
          zoom: z
        })
      }
    }
    return view
  }

  ol.hash = function(map) {
    var updateView = function() {
      if (location.hash === encode(map.getView())) return
      var changedView = decode(location.hash)
      if (changedView !== null) map.setView(changedView)
    }
    map.on('moveend', function(event) {
      history.replaceState(null, null, encode(map.getView()))
    })
    updateView()
    window.addEventListener('hashchange', updateView)
  }
}

export default hasher
