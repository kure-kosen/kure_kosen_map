import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer/'
import { XYZ as XYZSource, Vector as VectorSource } from 'ol/source/'
import { GeoJSON } from 'ol/format'

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
    source: createSource(data.format, data.url, data.attribute_title, data.attribute_url)
  }
}

const createSource = (format, url, attri_title, attri_url) => {
  switch (format) {
    case 'xyz':
      return new XYZSource({
        url: url,
        attributions: [`<a href="${attri_url}">${attri_title}</a>`]
      })
    case 'geojson':
      return new VectorSource({
        format: new GeoJSON(),
        url: url,
        crossOrigin: 'anonymous',
        attributions: [`<a href="${attri_url}">${attri_title}</a>`]
      })
    default:
      break
  }
}

const fetchAddlayer = async map => {
  await axios
    .get('/api/layers/')
    .then(response => {
      const result = response.data
      for (let i in result) {
        map.addLayer(createLayer(result[i]))
      }
    })
    .catch(error => {
      console.log('error...')
      console.log(error)
    })

  await MyLayerSwitcher(map)
}

export default fetchAddlayer
