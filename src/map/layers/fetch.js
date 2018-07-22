import { Tile as TileLayer } from 'ol/layer/'
import { XYZ as XYZSource } from 'ol/source/'
import { Attribution } from 'ol/control'

import MyLayerSwitcher from '../layer_switcher'

import axios from 'axios'

import 'babel-polyfill'

const fetchAddlayer = map => {
  axios
    .get('http://localhost:3000/layer')
    .then(response => {
      const result = response.data
      for (let i = 0; i < 4; i++) {
        let tmp = new TileLayer({
          id: i + 6,
          type: 'base',
          group: result[i]['group'],
          category: result[i]['category'],
          name: result[i]['name'],
          visible: false,
          source: new XYZSource({
            url: result[i]['url'],
            attributions: [
              new Attribution({
                html: result[i]['attributions']
              })
            ]
          })
        })
        map.addLayer(tmp)
      }
      MyLayerSwitcher(map)
    })
    .catch(function(error) {
      console.log('error...')
      console.log(error)
    })
}

export default fetchAddlayer
