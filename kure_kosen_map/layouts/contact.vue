<template>
  <div>
    <Header :colors="colors"/>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      colors: {
        pc: {
          backGroundColor: "#f9f9fc",
          text: "#45575d"
        },
        sp: {
          backGroundColor: "transparent",
          text: "#f9f9fc"
        }
      }
    };
  }
};
</script>
