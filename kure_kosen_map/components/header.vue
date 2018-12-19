<template>
  <component
    :is="currentMenu"
    :top="side === 'top'">
    <ul class="navbar drawer-menu">
      <li><a
        class="drawer-brand"
        href="#">呉高専マップ</a></li>
      <li><a
        class="drawer-menu-item"
        href="map.html">マップを使う</a></li>
      <li><nuxt-link
        class="drawer-menu-item"
        to="about_us">私たちについて</nuxt-link></li>
      <li><nuxt-link
        class="drawer-menu-item"
        to="contact">お問い合わせ</nuxt-link></li>
    </ul>
  </component>
</template>

<script>
import slide from "./slideMenu/slide";
import Menu from "./slideMenu/menu";

export default {
  components: {
    slide,
    Menu
  },
  data() {
    return {
      menus: {
        slide: { buttonText: "Slide" }
      },
      side: "top",
      currentMenu: "slide"
    };
  },
  methods: {
    changeMenu(menu) {
      this.currentMenu = menu.replace(/ +/g, "").toLowerCase();
      return this.currentMenu;
    },
    changeSide(side) {
      this.side = side;
    }
  }
};
</script>

<style scoped>
@import url("../assets/contact/css/drawer.css");

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
    background: #f9f9fc;
    border-bottom: 1px solid #d9d9d9;
  }

  .navbar li {
    z-index: 10;
  }

  .navbar li a {
    display: block;
    height: 55px;
    font-size: 16px;
    line-height: 55px;
    padding: 0 25px;
    color: #45575d;
    text-decoration: none;
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
    background: transparent;
  }

  .navbar li a {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    height: 3.75rem;
    line-height: 3.75rem;
    color: #f9f9fc;
    text-decoration: none;
    border-bottom: 1px solid #d9d9d9;
    box-sizing: border-box;
  }

  .navbar li:first-child a {
    padding-left: 10px;
    display: block;
  }
}
</style>
