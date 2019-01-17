<template>
  <div>
    <MyMap />
    <mapMenuWrapper />
  </div>
</template>

<script>
import MyMap from "../components/map/mymap";
import mapMenuWrapper from "../components/map/mapMenuWrapper";

export default {
  components: {
    MyMap,
    mapMenuWrapper
  }
};
</script>

<style scoped>
@import url("../assets/map/map.css");
@import url("../assets/map/map-design.css");
</style>
