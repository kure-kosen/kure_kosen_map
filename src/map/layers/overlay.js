import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer/'
import { XYZ as XYZSource, Vector as VectorSource } from 'ol/source/'
import { GeoJSON } from 'ol/format'
import { Style, Icon } from 'ol/style/'

import aed_icon from '../icon/aed.png'
import aed_data from '../geojson/20171224.geojson'

const path = './map/'

// 現在地の円
// export const geocycle = new VectorLayer({
//   source: new VectorSource({
//     features: [accuracyFeature, positionFeature]
//   })
// })

//呉市オープンデータのaed
export const aed = new VectorLayer({
  title: 'AED',
  source: new VectorSource({
    format: new GeoJSON(),
    url: aed_data,
    crossOrigin: 'anonymous'
  }),
  style: new Style({
    image: new Icon({
      src: aed_icon,
      scale: 0.2
    })
  })
})

//kmlのサンプル
// export const kml = new VectorLayer({
//   title: 'kml',
//   source: new VectorSource({
//     format: new KML(),
//     url: path + 'assets/kml/kokudo.kml',
//     crossOrigin: 'anonymous'
//   })
// })

//xyzタイルのサンプル
export const tile = new TileLayer({
  title: 'tile',
  source: new XYZSource({
    url: path + 'tiles2/{z}/{x}/{y}.png',
    crossOrigin: 'anonymous'
  })
})
