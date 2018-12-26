<template>
  <div>
    <div id="mymap" />
    <popup />
  </div>
</template>

<script>
import initMap from "../../assets/map/initMap";

import popup from "./popup";

export default {
  name: "MyMap",
  components: {
    layerSwitcher,
    popup
  },
  mounted: function() {
    initMap(this);
  }
};
</script>

<style scoped>
@import url("../../assets/map/map.css");
@import url("../../assets/map/map-design.css");
</style>
