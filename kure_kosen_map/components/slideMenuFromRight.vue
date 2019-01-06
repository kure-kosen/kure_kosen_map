<template>
  <div>
    <div
      id="sideNav"
      class="menu"
    >
      <nav class="item-list">
        <slot/>
      </nav>
      <span
        v-show="isSideBarOpen/* && (vw < 740) */"
        class="cross-button cross-style"
        @click="closeMenu">
        <i class="fa fa-lg fa-times"/>
      </span>
    </div>
    <span
      v-show="!isSideBarOpen/* && (vw < 740) */"
      class="burger-button"
      @click="openMenu"
    >
      <i class="fa fa-lg fa-bars"/>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    menuWidth: {
      type: String,
      default: "270px"
    }
  },

  data() {
    return {
      isSideBarOpen: false,
      vw: window.innerWidth
    };
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
    },

    openMenu() {
      this.isSideBarOpen = true;
      document.getElementById("sideNav").style.width = this.menuWidth;
      document.getElementById("sideNav").style.top = "0";
    },

    closeMenu() {
      this.isSideBarOpen = false;
      document.getElementById("sideNav").style.width = "0";
      document.getElementById("sideNav").style.top = "0";
    },

    documentClick(e) {
      const element = document.querySelector(".burger-button");
      const target = e.target;
      if (element !== target && !element.contains(target) && e.target.className !== "menu" && this.isSideBarOpen) {
        this.closeMenu();
      }
    }
  }
};
</script>

<style scoped>
.burger-button {
  position: fixed;
  top: 12px;
  right: 2px;
  left: auto;
  z-index: 100;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}

.cross-button {
  width: 24px;
  height: 24px;
}

.menu {
  position: fixed; /* Stay in place */
  top: 0; /* -100% top - change this with JavaScript */
  right: 0;
  left: auto;
  z-index: 1000; /* Stay on top */
  overflow-x: hidden; /* Disable horizontal scroll */
  width: 0;
  height: auto;
  background-color: #45575d61; /* Black*/
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

@media screen and (max-width: 740px) {
}
</style>
