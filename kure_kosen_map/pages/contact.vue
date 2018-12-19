<template>
  <div class="___container">
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

    <main id="page-wrap">
      <div class="container contact-parent">
        <div class="contact">
          <div class="contact-inner">
            <div class="introduction">
              <h1>お問い合わせ</h1>
              <p>下のフォームにご記入ください。</p>
            </div>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfdYqapphLrLdLBbDD6E8jfGE9DZT-WGtIq-Q4-x4X66XuPvQ/formResponse"
              method="POST"
            >
              <ul class="form-components">
                <li>
                  <label>
                    <input
                      type="text"
                      placeholder="名前・ニックネーム"
                      class="input-area"
                      name="entry.1768869632"
                      required
                    >
                  </label>
                </li>
                <li>
                  <label>
                    <select
                      class="input-area"
                      name="entry.287582427"
                      required>
                      <option
                        selected
                        disabled>《所属》</option>
                      <option value="呉高専生">呉高専生</option>
                      <option value="中学生">中学生</option>
                      <option value="保護者">保護者</option>
                      <option value="その他">その他</option>
                    </select>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="email"
                      placeholder="電子メールアドレス"
                      class="input-area"
                      name="entry.1774156880"
                      required
                    >
                  </label>
                </li>
                <li>
                  <label>
                    <select
                      class="input-area"
                      name="entry.1357279738"
                      required>
                      <option
                        selected
                        disabled>《お問い合わせの種類》</option>
                      <option value="感想">感想</option>
                      <option value="バグ報告">バグ報告</option>
                      <option value="その他">その他</option>
                    </select>
                  </label>
                </li>
                <li>
                  <textarea
                    placeholder="メッセージをどうぞ"
                    class="input-area"
                    name="entry.497026875"
                    required
                  />
                </li>
              </ul>
              <input
                type="submit"
                value="送信">
            </form>
          </div>
        </div>
      </div>
    </main>
    <div class="img-bg"/>
  </div>
</template>

<script>
import slide from "../components/Menu/slide";
import Menu from "../components/Menu";

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

/* --- リセット --- */
* {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* --- 背景画像 ---  */
.img-bg {
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  width: 52vw;
  height: 100vh;
  background-image: url("../assets/contact/images/bg1.png");
  background-size: cover;
  background-position: 25% 75%;
}

/* --- ナビゲーション --- */
.navbar li:first-child a {
  font-size: 110%;
}

/* --- フォーム全体 --- */
.contact {
  background: #f9f9fc;
  right: 0;
  width: 48vw;
  height: 100%;
  overflow-y: auto;
  box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.32);
  display: block;
}

.contact-inner {
  width: 80%;
  padding: 0 10%;
  margin: 0 auto;
}

.contact-inner h1 {
  display: inline-block;
  font-size: 29px;
  margin: 0;
  padding: 0;
}

.contact-inner .introduction {
  padding: 5px 0;
}

.contact-inner ul.form-components {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.contact-inner ul.form-components li {
  margin: 25px 0;
}

.contact-inner .introduction p {
  color: #45575d;
  margin: 1em 0;
}

.contact-inner form .input-area::placeholder {
  color: #45575d;
}

/* --- フォーム各部品 --- */
.contact-inner form .input-area {
  /* --- 基本スタイル --- */
  background: #fff;
  border: 0;
  height: 40px;
  padding: 0 10px;
  border-radius: 2px;
  outline: 0;
  font-size: 17px;
  box-shadow: 0px 1px 0px 0px #f1f1f1;
}

.contact-inner form input[type="text"].input-area,
.contact-inner form input[type="email"].input-area {
  width: 100%;
}

.contact-inner form select.input-area {
  width: 100%;
}

.contact-inner form textarea.input-area {
  width: 100%;
  padding: 10px;
  height: 6rem;
  resize: none;
}

.contact-inner form input[type="submit"] {
  background: #fe4c6b;
  color: #fff;
  border: 0;
  width: 100px;
  height: 35px;
  box-shadow: 0px 1px 9px -3px #474747;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-left: auto;
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

  /* --- フォーム全体 --- */
  /* --- PC向け中央揃え --- */
  /* --- contact-parentをrelativeにした上で、contactとcontact-innerの両方を揃えている --- */
  .contact-parent {
    position: relative;
    height: calc(100vh - 56px);
  }

  .contact,
  .contact-inner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media screen and (max-width: 740px) {
  /* --- 背景画像 --- */
  .img-bg {
    width: 100vw;
    background-position: 40%;
    position: fixed;
  }

  /* --- フォーム全体 --- */
  .contact {
    background: #f9f9fcf5; /* 透過は背景画像が見えるようにするため */
    position: static;
    width: 85vw;
    height: auto;
    display: block;
    margin: 20px auto;
    height: auto;
    overflow-y: visible;
  }

  .contact-inner {
    padding: 20px 10%;
  }

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
