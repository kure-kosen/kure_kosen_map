import { Tile as TileLayer } from 'ol/layer/'
import { XYZ as XYZSource } from 'ol/source/'
import { Attribution } from 'ol/control'

import MyLayerSwitcher from '../layer_switcher'

import axios from 'axios'

import 'babel-polyfill'

const createLayer = data => {
  return new TileLayer({
    id: data.id,
    type: 'base',
    group: data.group,
    category: data.category,
    name: data.name,
    visible: false,
    source: new XYZSource({
      url: data.url,
      attributions: [
        new Attribution({
          html: data.attributions
        })
      ]
    })
  })
}

const fetchAddlayer = map => {
  axios
    .get('http://localhost:3000/layer')
    .then(response => {
      const result = response.data
      for (let i = 0; i < 4; i++) {
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
