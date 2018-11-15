import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer/'
import { XYZ as XYZSource, Vector as VectorSource } from 'ol/source/'
import { GeoJSON } from 'ol/format'
import { Style, Icon } from 'ol/style/'

import aed_icon from '../icon/aed.png'
import aed_data from '../geojson/20171224.geojson'

import camara_icon from '../icon/camera.png'
import searchtest_data from '../geojson/searchtest.geojson'

//呉市オープンデータのaed
export const aed = new VectorLayer({
  id: 3,
  type: 'overlay',
  group: '呉市オープンデータ',
  category: '医療',
  name: 'AED',
  zIndex: 0,
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
  id: 4,
  type: 'overlay',
  group: 'mierune',
  category: '',
  name: 'normal',
  zIndex: 0,
  source: new XYZSource({
    url: '../tiles2/{z}/{x}/{y}.png',
    crossOrigin: 'anonymous'
  })
})

export const searchLayer = new VectorLayer({
  id: 5,
  type: 'overlay',
  group: 'searchLayer',
  category: '',
  name: 'searchLayer',
  zIndex: 0,
  source: new VectorSource({
    format: new GeoJSON(),
    url: searchtest_data,
    crossOrigin: 'anonymous'
  }),
  style: new Style({
    image: new Icon({
      src: camara_icon,
      scale: 0.8
    })
  })
})
