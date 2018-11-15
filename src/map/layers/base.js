import { Tile as TileLayer, Group as GroupLayer } from 'ol/layer/'
import { OSM, XYZ as XYZSource, Stamen as StamenSource } from 'ol/source/'
import { Attribution } from 'ol/control'

//地理院タイル
export const kokudo = new TileLayer({
  id: 1,
  type: 'base',
  group: 'gsi',
  category: 'その他',
  name: '国土地理院',
  visible: false, //trueならば最初から表示してくれる、ただし1つまで
  source: new XYZSource({
    attributions: [
      new Attribution({
        html: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
      })
    ],
    url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    projection: 'EPSG:3857'
  })
})

// OpenStreetMap
export const osm = new TileLayer({
  id: 2,
  type: 'base',
  group: 'OSM',
  category: '',
  name: 'OSM',
  visible: true,
  source: new OSM()
})

//なんか昔っぽいやつ(安芸阿賀周辺のレベル16程度はないため表示されない)
// export const watercolor = new TileLayer({
//   title: 'Water color',
//   type: 'base',
//   visible: false,
//   source: new StamenSource({
//     layer: 'watercolor'
//   })
// })

//なんか昔っぽいやつのラベル付き
// export const watercolorlabels = new GroupLayer({
//   title: 'Water color with labels',
//   type: 'base',
//   combine: true,
//   visible: false,
//   layers: [
//     new TileLayer({
//       source: new StamenSource({
//         layer: 'watercolor'
//       })
//     }),
//     new TileLayer({
//       source: new StamenSource({
//         layer: 'terrain-labels'
//       })
//     })
//   ]
// })
