import { OSM } from "ol/source/";
import { Tile as TileLayer } from "ol/layer/";
import { XYZ as XYZSource } from "ol/source/";

// OpenStreetMap
const osm = new TileLayer({
  source: new OSM()
});

//地理院タイル ベースマップ 標準地図
const kokudo_std = new TileLayer({
  source: new XYZSource({
    attributions: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
    url: "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
    projection: "EPSG:3857"
  })
});

//地理院タイル ベースマップ 淡色地図
const kokudo_pale = new TileLayer({
  source: new XYZSource({
    attributions: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
    url: "https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",
    projection: "EPSG:3857"
  })
});

const layers = [
  { text: "OpenStreetMap", data: { id: 1, layer: osm }, state: { checked: true } },
  {
    text: "国土地理院",
    children: [
      {
        text: "ベースマップ",
        children: [
          { text: "標準地図", data: { id: 2, layer: kokudo_std } },
          { text: "淡色地図", data: { id: 3, layer: kokudo_pale } }
        ]
      }
    ]
  }
];

export default layers;
