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
import MyPopup from './popup'
import MySelect from './select'
import MySearch from './search'
import addHash from './hash'
import geolocationPlot from './geolocaton'
import changeDirection from './direction'
import { toNorth, searchAdjustment } from './utils'
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
  layers: MyLayers,
  overlays: [MyPopup]
})

map.addInteraction(new DragRotateAndZoom())
map.addInteraction(MySelect)

map.addControl(new FullScreen({ source: 'fullscreen' }))
map.addControl(new ZoomSlider())
map.addControl(new ScaleLine())

toNorth(map)
geolocationPlot(map)
changeDirection(map)
addHash(map)
MySearch(map)
searchAdjustment()
