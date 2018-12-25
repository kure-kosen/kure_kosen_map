// ol
import { Group as GroupLayer } from "ol/layer/";
// ------------------------------------------------

// my file
import { osm, kokudo_std } from "./base";
import { aed, searchLayer } from "./overlay";
// ------------------------------------------------

const base = new GroupLayer({
  title: "Base maps",
  layers: [kokudo_std, osm]
});

const overlay = new GroupLayer({
  title: "Overlays",
  layers: [aed, searchLayer]
});

const layers = [base, overlay];

export default layers;
