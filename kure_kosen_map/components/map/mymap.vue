<template>
  <div>
    <div 
      id="map" 
      class="map" />
    <layerSwitcherWrapper />
    <popup />
  </div>
</template>

<script>
import initMap from "../../assets/map/initMap";

import layerSwitcherWrapper from "./layerSwitcherWrapper";
import popup from "./popup";

export default {
  name: "MyMap",
  components: {
    layerSwitcherWrapper,
    popup
  },
  mounted: function() {
    initMap(this);
  }
};
</script>

<style scoped>
.map {
  position: relative;
  float: left;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
