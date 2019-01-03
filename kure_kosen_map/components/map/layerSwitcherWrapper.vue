<template>
  <div>
    <div
      class="ol-unselectable ol-control layer_switcher_button_wrapper"
    >
      <button @click="open">
        <i class="far fa-clone" />
      </button>
    </div>

    <div
      v-draggable="draggableOptions"
      v-show="isOpen"
      class="window">
      <div
        ref="handle"
        class="header">
        <div class="close_button_wrapper">
          <button @click="close">
            <i class="fas fa-times" />
          </button>
        </div>
      </div>

      <layerLists />
      <layerSwitcher />

    </div>
  </div>
</template>

<script>
import { Draggable } from "draggable-vue-directive";
import layerSwitcher from "./layerSwitcher";
import layerLists from "./layerLists";

export default {
  components: {
    layerSwitcher,
    layerLists
  },

  directives: {
    Draggable
  },

  data() {
    return {
      isOpen: false,
      draggableOptions: {
        handle: undefined,
        initialPosition: { left: 100, top: 100 }
      }
    };
  },
  mounted() {
    this.draggableOptions.handle = this.$refs.handle;
  },

  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.layer_switcher_button_wrapper {
  position: absolute;
  top: 290px;
  left: 0.5em;
}

.window {
  position: absolute;
  width: 500px;
  height: 500px;
  border: solid 5px #0da3e3;
  border-radius: 3px;
  background-color: #fff;
}

.header {
  height: 18px;
  background-color: #0da3e3;
  cursor: pointer;
}

.header i {
  color: #fff;
  font-size: 18px;
  line-height: 18px;
}

.close_button_wrapper {
  float: right;
  vertical-align: middle;
  font-size: 16px;
  margin-top: -1px;
  margin-right: 1px;
  text-align: right;
}
</style>
