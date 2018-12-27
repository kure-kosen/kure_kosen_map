<template>
  <div>
    <MyMap />
    <div class="fullscreenlayer">
      <component :is="slideMenu">
        <mapMenu />
      </component>
    </div>
  </div>
</template>

<script>
import MyMap from "../components/map/mymap";
import mapMenu from "../components/map/mapMenu";
import slideMenuFromTop from "../components/slideMenuFromTop";
import slideMenuFromRight from "../components/slideMenuFromRight";

export default {
  components: {
    MyMap,
    mapMenu,
    slideMenuFromTop,
    slideMenuFromRight
  },

  data() {
    return {
      vw: window.innerWidth
    };
  },

  computed: {
    slideMenu: function() {
      if (this.vw < 740) {
        return "slideMenuFromTop";
      } else {
        return "slideMenuFromRight";
      }
    }
  },

  created: function() {
    document.addEventListener("click", this.documentClick);
    window.addEventListener("resize", this.handleResize);
  },

  destroyed: function() {
    document.removeEventListener("click", this.documentClick);
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize: function() {
      this.vw = window.innerWidth;
    }
  }
};
</script>

<style scoped>
@import url("../assets/map/map.css");
@import url("../assets/map/map-design.css");
</style>
