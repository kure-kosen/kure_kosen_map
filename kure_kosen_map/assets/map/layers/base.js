import { Attribution } from "ol/control";
import { Tile as TileLayer } from "ol/layer/";
import { OSM, XYZ as XYZSource } from "ol/source/";

// OpenStreetMap
export const osm = new TileLayer({
  title: "OSM",
  type: "base",
  visible: true,
  source: new OSM()
});

//地理院タイル
export const kokudo_std = new TileLayer({
  title: "国土地理院",
  type: "base",
  visible: false,
  source: new XYZSource({
    attributions: [
      new Attribution({
        html: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
      })
    ],
    url: "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
    projection: "EPSG:3857"
  })
});
