import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer/'
import { XYZ as XYZSource, Vector as VectorSource } from 'ol/source/'
import { GeoJSON } from 'ol/format'
import { Attribution } from 'ol/control'

import MyLayerSwitcher from '../layer_switcher'

import axios from 'axios'

import 'babel-polyfill'

const createLayer = data => {
  switch (data.format) {
    case 'xyz':
      return new TileLayer(createProperties(data))
    case 'geojson':
      return new VectorLayer(createProperties(data))
    default:
      break
  }
}

const createProperties = data => {
  return {
    id: data.id,
    type: data.type,
    group: data.group,
    category: data.category,
    name: data.name,
    visible: false,
    source: createSource(data.format, data.url, data.attributions)
  }
}

const createSource = (format, url, attributions) => {
  switch (format) {
    case 'xyz':
      return new XYZSource({
        url: url,
        attributions: [
          new Attribution({
            html: attributions
          })
        ]
      })
    case 'geojson':
      return new VectorSource({
        format: new GeoJSON(),
        url: url,
        crossOrigin: 'anonymous'
      })
    default:
      break
  }
}

const fetchAddlayer = map => {
  axios
    .get('http://localhost:3000/layer')
    .then(response => {
      const result = response.data
      for (let i = 0, j = result.length; i < j; i++) {
        map.addLayer(createLayer(result[i]))
      }
      MyLayerSwitcher(map)
    })
    .catch(function(error) {
      console.log('error...')
      console.log(error)
    })
}

export default fetchAddlayer
