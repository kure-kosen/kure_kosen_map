import "ol/ol.css";

import { defaults as defaultControls, FullScreen, ScaleLine, ZoomSlider } from "ol/control";
import { defaults as defaultInteractions, DragRotateAndZoom } from "ol/interaction";
import Map from "ol/Map";
import { fromLonLat } from "ol/proj";
import View from "ol/View";

const initMap = vm => {
  const view = new View({
    center: fromLonLat([132.601271, 34.232102]),
    zoom: 17.5,
    rotation: -0.36911708366090856
  });

  const interactions = defaultInteractions().extend([new DragRotateAndZoom()]);
  const controls = defaultControls().extend([
    new FullScreen({
      source: "fullscreen"
    })
  ]);

  const map = new Map({
    target: "map",
    controls,
    interactions,
    view
  });

  map.addControl(new ScaleLine());
  map.addControl(new ZoomSlider());

  vm.$store.commit("setMap", map);
};

export default initMap;
