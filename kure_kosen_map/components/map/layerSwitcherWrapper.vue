<template>
  <div>
    <div
      id="layer_switcher_button_wrapper"
      class="ol-unselectable ol-control"
    >
      <button @click="openLayerSwitcher">
        <i class="far fa-clone" />
      </button>
    </div>

    <VueDragResize
      v-show="isOpen"
      :w="500"
      :h="500"
      :x="100"
      :y="100"
    >
      <layerSwitcher @close="closeLayerSwitcher" />
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";
import layerSwitcher from "./layerSwitcher";

export default {
  components: {
    VueDragResize,
    layerSwitcher
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    openLayerSwitcher() {
      this.isOpen = true;
    },
    closeLayerSwitcher() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
#layer_switcher_button_wrapper {
  position: absolute;
  top: 290px;
  left: 0.5em;
}
</style>
