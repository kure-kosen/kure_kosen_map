<template>
  <div>
    <div id="mymap" />
  </div>
</template>

<script>
import initMap from "../assets/map/initMap.js";

export default {
  name: "MyMap",
  mounted: function() {
    initMap(this);
  }
};
</script>

<style scoped>
@import url("../assets/map/map.css");
</style>
