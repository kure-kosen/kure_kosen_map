import { View } from 'ol'
import { fromLonLat, toLonLat } from 'ol/proj'

const encode = view => {
  let c = toLonLat(view.getCenter())
  let z = view.getZoom()
  let x = c[0].toFixed(6)
  let y = c[1].toFixed(6)
  return '#' + [z, x, y].join('/')
}

const decode = hash => {
  let view = null
  if (hash.match(/^#([0-9]+)\/(.+)\/(.+)$/)) {
    let z = parseInt(RegExp.$1)
    let x = parseFloat(RegExp.$3)
    let y = parseFloat(RegExp.$2)
    if (!isNaN(y) && !isNaN(x)) {
      view = new View({
        center: fromLonLat([x, y]),
        zoom: z
      })
    }
  }
  return view
}

const updateView = map => {
  if (location.hash === encode(map.getView())) return
  let changedView = decode(location.hash)
  if (changedView !== null) map.setView(changedView)
}

const addHash = map => {
  map.on('moveend', function(e) {
    history.replaceState(null, null, encode(e.map.getView()))
  })
  updateView(map)
  window.addEventListener('hashchange', updateView(map))
}

export default addHash
