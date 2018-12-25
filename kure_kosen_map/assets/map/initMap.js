import "ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { ScaleLine } from "ol/control";
import { defaults as defaultInteractions, DragRotateAndZoom } from "ol/interaction";

const initMap = vm => {
  const view = new View({
    center: fromLonLat([140.097, 37.856]),
    zoom: 8
  });

  const layers = [
    new TileLayer({
      source: new OSM()
    })
  ];

  const interactions = defaultInteractions().extend([new DragRotateAndZoom()]);

  const map = new Map({
    target: "mymap",
    interactions,
    layers,
    view
  });

  map.addControl(new ScaleLine());

  vm.$store.commit("setMap", map);
};

export default initMap;
