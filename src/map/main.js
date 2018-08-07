// ol
import { Map } from 'ol'
import { FullScreen, ScaleLine, ZoomSlider } from 'ol/control'
import { DragRotateAndZoom } from 'ol/interaction'
// ------------------------------------------------

// ol-ext
// ------------------------------------------------

// Others
import axios from 'axios'
switch (process.env.NODE_ENV) {
  case 'development':
    axios.defaults.baseURL = process.env.API_URL
    break
  case 'production':
    axios.defaults.baseURL = ''
    break
}
// ------------------------------------------------

// my file
import MyView from './view'
import MyLayers from './layers/index'
import MyPopup from './popup'
import MySelect from './select'
import MySearch from './search'
import fetchAddlayer from './layers/fetch'
import addHash from './hash'
import geolocationPlot from './geolocaton'
import changeDirection from './direction'
import { toNorth, searchAdjustment } from './utils'
import './map-design'
// ------------------------------------------------

// css
import 'normalize.css/normalize.css'
import './css/reset.css'
// import 'ol/ol.css' なぜかwebpackでbuildすると読み込まれないため => ./src/map/map.htmlでcdnで読み込んでいる
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
fetchAddlayer(map)
searchAdjustment()
