import "ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";

import { OSM } from "ol/source/";
import { Tile as TileLayer } from "ol/layer/";

import { ScaleLine } from "ol/control";
import { fromLonLat } from "ol/proj";
import { defaults as defaultInteractions, DragRotateAndZoom } from "ol/interaction";

const initMap = vm => {
  const view = new View({
    center: fromLonLat([132.601271, 34.232102]),
    zoom: 17.5,
    rotation: -0.36911708366090856
  });

  const interactions = defaultInteractions().extend([new DragRotateAndZoom()]);

  const map = new Map({
    target: "mymap",
    interactions,
    layers: [
      new TileLayer({
        title: "OSM",
        source: new OSM()
      })
    ],
    view
  });

  map.addControl(new ScaleLine());

  vm.$store.commit("setMap", map);
};

export default initMap;
