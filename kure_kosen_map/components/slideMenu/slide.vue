<template>
  <div>
    <Menu
      v-bind="this.$attrs"
      @openMenu="openMenu"
      @closeMenu="closeMenu">
      <slot/>
    </Menu>
  </div>
</template>

<script>
import Menu from "./menu";

export default {
  name: "Slide",
  components: {
    Menu: Menu
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    }
  }
};
</script>
