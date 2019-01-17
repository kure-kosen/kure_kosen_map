<template>
  <div>
    <div class="fullscreenlayer">
      <component
        :is="slideMenu"
        menu-width="270px">
        <mapMenu />
      </component>
    </div>
  </div>
</template>

<script>
import mapMenu from "./mapMenu";
import slideMenuFromTop from "../slideMenuFromTop";
import slideMenuFromRight from "../slideMenuFromRight";

export default {
  components: {
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
