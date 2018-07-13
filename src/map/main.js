// ol
import { Map } from 'ol'
import { FullScreen, ScaleLine, ZoomSlider } from 'ol/control'
import { DragRotateAndZoom } from 'ol/interaction'
// ------------------------------------------------

// ol-ext
// ------------------------------------------------

// my file
import MyView from './view'
import MyLayers from './layers/index'
import addHash from './hash'
import geolocationPlot from './geolocaton'
import { toNorth } from './utils'
import './map-design'
// ------------------------------------------------

// css
import 'normalize.css/normalize.css'
import 'ol/ol.css'
import './css/map.css'
import './css/map-design.css'
// ------------------------------------------------

const map = new Map({
  target: 'map',
  view: MyView,
  layers: MyLayers
})

map.addInteraction(new DragRotateAndZoom())

map.addControl(new FullScreen({ source: 'fullscreen' }))
map.addControl(new ZoomSlider())
map.addControl(new ScaleLine())

toNorth(map)
geolocationPlot(map)
addHash(map)
