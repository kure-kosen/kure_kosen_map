<template>
  <div>
    <Menu>
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
