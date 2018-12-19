<template>
  <div>
    <Menu v-bind="this.$attrs">
      <slot/>
    </Menu>
  </div>
</template>

<script>
import Menu from "./menu";

export default {
  components: {
    Menu
  }
};
</script>
