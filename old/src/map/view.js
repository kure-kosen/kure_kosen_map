import { View } from 'ol'
import { fromLonLat } from 'ol/proj'

const MyView = new View({
  center: fromLonLat([132.601271, 34.232102], 'EPSG:3857'),
  zoom: 17.5,
  rotation: -0.36911708366090856
})

export default MyView
