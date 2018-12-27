<template>
  <div>
    <Header
      :colors="colors"
      :borders="borders"/>
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
      },
      borders: {
        pc: {
          navBarBorder: "1px solid #d9d9d9"
        }
      }
    };
  }
};
</script>
