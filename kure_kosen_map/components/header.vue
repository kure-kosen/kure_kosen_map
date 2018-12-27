<template>
  <slideMenu>
    <ul
      :style="[backGroundColor, navBarBorder]"
      class="navbar drawer-menu">
      <li><a
        :style="textColor"
        class="drawer-brand"
        href="/">呉高専マップ</a></li>
      <li><a
        :style="textColor"
        class="drawer-menu-item"
        href="map.html">マップを使う</a></li>
      <li><nuxt-link
        :style="textColor"
        class="drawer-menu-item"
        to="about_us">私たちについて</nuxt-link></li>
      <li><nuxt-link
        :style="textColor"
        class="drawer-menu-item"
        to="contact">お問い合わせ</nuxt-link></li>
    </ul>
  </slideMenu>
</template>

<script>
import slideMenu from "./slideMenuFromTop";

export default {
  components: {
    slideMenu
  },
  props: {
    colors: {
      type: Object,
      default: () => ({
        pc: {
          backGroundColor: "transparent",
          text: "transparent"
        },
        sp: {
          backGroundColor: "transparent",
          text: "transparent"
        }
      })
    },
    borders: {
      type: Object,
      default: () => ({
        pc: {
          navBarBorder: "none"
        }
      })
    }
  },
  computed: {
    backGroundColor() {
      return {
        "--pc-background": this.colors.pc.backGroundColor,
        "--sp-background": this.colors.sp.backGroundColor
      };
    },
    textColor() {
      return {
        "--pc-color": this.colors.pc.text,
        "--sp-color": this.colors.sp.text
      };
    },
    navBarBorder() {
      return {
        "--border-bottom": this.borders.pc.navBarBorder
      };
    }
  }
};
</script>

<style scoped>
/* --- ナビゲーション --- */
.navbar li:first-child a {
  font-size: 110%;
}

@media screen and (min-width: 741px) {
  /* --- ナビゲーション: drawer関連 --- */
  .drawer-navbar,
  .drawer-navbar .drawer-nav {
    height: auto;
  }

  .drawer-navbar {
    border: 0;
  }

  /* --- PC向けflexboxによるメニュー --- */
  .navbar {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    border-bottom: var(--border-bottom);
    background: var(--pc-background);
  }

  .navbar li {
    z-index: 10;
  }

  .navbar li a {
    display: block;
    padding: 0 25px;
    height: 55px;
    text-decoration: none;
    font-size: 16px;
    line-height: 55px;

    color: var(--pc-color);
  }

  .navbar li:first-child {
    margin-right: auto;
  }
}

@media screen and (max-width: 740px) {
  /* --- ナビゲーション --- */
  .navbar {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;

    background: var(--sp-background);
  }

  .navbar li a {
    display: block;
    box-sizing: border-box;
    padding-left: 10px;
    width: 100%;
    height: 3.75rem;
    border-bottom: 1px solid #d9d9d9;
    text-decoration: none;
    font-size: 1.4rem;
    line-height: 3.75rem;

    color: var(--sp-color);
  }

  .navbar li:first-child a {
    display: block;
    padding-left: 10px;
  }
}
</style>
