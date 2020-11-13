<template>
  <div>
    <MyMap />
    <div class="fullscreen" />
  </div>
</template>

<script>
import MyMap from "../components/map/mymap";

export default {
  components: {
    MyMap
  }
};
</script>

<style>
.rotate-north {
  top: calc(3em + 280px);
  left: 0.5em;
}

.ol-touch .rotate-north {
  top: calc(3em + 3em + 200px + 3em);
}

.ol-rotate {
  right: 3.5em;
  transition: opacity 0.25s linear, visibility 0s linear;
}

.ol-zoom {
  top: 0.5em;
  left: 0.5em;
}

.ol-zoomslider {
  top: calc(1.375em + 0.5em + 10px);
}

.ol-zoom .ol-zoom-out {
  margin-top: 210px;
}

.ol-zoom-in.ol-has-tooltip:hover [role="tooltip"],
.ol-zoom-in.ol-has-tooltip:focus [role="tooltip"] {
  top: 3px;
}

.ol-zoom-out.ol-has-tooltip:hover [role="tooltip"],
.ol-zoom-out.ol-has-tooltip:focus [role="tooltip"] {
  top: 232px;
}

.ol-full-screen {
  position: absolute;
  top: 3em;
  right: 0.5em;
}

.fullscreen:-moz-full-screen {
  height: 100%;
}

.fullscreen:-webkit-full-screen {
  height: 100%;
}

.fullscreen:-ms-fullscreen {
  height: 100%;
}

.fullscreen:fullscreen {
  height: 100%;
}

.fullscreen {
  width: 100%;
  height: 100%;
}

.fullscreenlayer {
  position: absolute;
  z-index: 1000;
}
</style>
