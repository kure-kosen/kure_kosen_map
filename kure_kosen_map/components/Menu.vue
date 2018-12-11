<template>
  <div>
    <div
      id="sideNav"
      class="bm-menu">
      <nav class="bm-item-list">
        <slot/>
      </nav>
      <span
        :class="{ hidden: !crossIcon }"
        class="bm-cross-button cross-style"
        @click="closeMenu">
        <span
          v-for="(x, index) in 2"
          :key="x"
          :style="{ position: 'absolute', width: '3px', height: '14px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}"
          class="bm-cross"
        />
      </span>
    </div>

    <div
      :class="{ hidden: !burgerIcon }"
      class="bm-burger-button"
      @click="openMenu">
      <span
        v-for="(x, index) in 3"
        :style="{top:20 * (index * 2) + '%'}"
        :key="index"
        class="bm-burger-bars line-style"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menubar",
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false //
    },
    right: {
      type: Boolean,
      required: false,
      default: true //
    },
    left: {
      type: Boolean,
      required: false,
      default: false //
    },
    width: {
      type: [String],
      required: false,
      default: "300"
    },
    disableEsc: {
      type: Boolean,
      required: false,
      default: false //
    },
    noOverlay: {
      type: Boolean,
      required: false,
      default: false //
    },
    /*
    onStateChange: {
      type: Function,
      required: false
    },
    */
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      isSideBarOpen: false
    };
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler(newValue, oldValue) {
        if (!oldValue && newValue) {
          this.openMenu();
        }
        if (oldValue && !newValue) {
          this.closeMenu();
        }
      }
    },
    right: {
      deep: true,
      immediate: true,
      handler(oldValue, newValue) {
        if (oldValue) {
          this.$nextTick(() => {
            document.querySelector(".bm-burger-button").style.left = "auto";
            document.querySelector(".bm-burger-button").style.right = "36px";
            document.querySelector(".bm-menu").style.left = "auto";
            document.querySelector(".bm-menu").style.right = "0px";
          });
        }
        if (newValue) {
          if (document.querySelector(".bm-burger-button").hasAttribute("style")) {
            document.querySelector(".bm-burger-button").removeAttribute("style");
            document.getElementById("sideNav").style.right = "auto";
          }
        }
      }
    }
  },

  mounted() {
    if (!this.disableEsc) {
      document.addEventListener("keyup", this.closeMenuOnEsc);
    }
  },
  created: function() {
    document.addEventListener("click", this.documentClick);
  },
  destroyed: function() {
    document.removeEventListener("keyup", this.closeMenuOnEsc);
    document.removeEventListener("click", this.documentClick);
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
      this.isSideBarOpen = true;

      if (!this.noOverlay) {
        document.body.className += "bm-overlay";
      }
      this.$nextTick(function() {
        document.getElementById("sideNav").style.width = "100%";
        document.getElementById("sideNav").style.top = "0";
      });
    },

    closeMenu() {
      this.$emit("closeMenu");
      this.isSideBarOpen = false;
      document.body.className = document.body.className.replace("bm-overlay", "");
      document.getElementById("sideNav").style.width = "100%";
      document.getElementById("sideNav").style.top = "-100%";
    },

    closeMenuOnEsc(e) {
      e = e || window.event;
      if (e.key === "Escape" || e.keyCode === 27) {
        document.getElementById("sideNav").style.width = "0px";
        document.body.style.backgroundColor = "inherit";
        this.isSideBarOpen = false;
      }
    },
    documentClick(e) {
      let element = document.querySelector(".bm-burger-button");
      let target = e.target;
      if (element !== target && !element.contains(target) && e.target.className !== "bm-menu" && this.isSideBarOpen) {
        this.closeMenu();
      }
    }
  }
};
</script>

<style>
@media screen and (max-width: 740px) {
  html {
    height: 100%;
  }
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 36px; /* updated at App.vue */
    top: 36px;
    cursor: pointer;
    z-index: 100; /* added */
  }
  .bm-burger-button.hidden {
    display: none;
  }
  .bm-burger-bars {
    background-color: #373a47;
  }
  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross-button.hidden {
    display: none;
  }
  .bm-menu {
    height: auto;
    width: 100%;
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: -100%; /* -100% top - change this with JavaScript */
    left: 0;
    background-color: #45575d61; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  /*
  .bm-item-list {
    color: #b8b7ad;
    margin-left: 10%;
    font-size: 20px;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
  }
  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
  }
  */
}
</style>
