// ol
import { Group as GroupLayer } from 'ol/layer/'
// ------------------------------------------------

// my file
import { kokudo, osm } from './base'
import { aed, tile, searchLayer } from './overlay'
// ------------------------------------------------

const base = new GroupLayer({
  title: 'Base maps',
  layers: [kokudo, osm]
})

const overlay = new GroupLayer({
  title: 'Overlays',
  layers: [tile, aed, searchLayer]
})

const MyLayers = [base, overlay]

export default MyLayers
