// ol
import { Group as GroupLayer } from 'ol/layer/'
// ------------------------------------------------

// my file
import { kokudo, osm } from './base'
import { aed, tile } from './overlay'
// ------------------------------------------------

const base = new GroupLayer({
  title: 'Base maps',
  layers: [kokudo, osm]
})

const overlay = new GroupLayer({
  title: 'Overlays',
  layers: [tile, aed]
})

const MyLayers = [base, overlay]

export default MyLayers
