<template>
  <div class="container">
    <div class="div1">
      <a href="map.html">
        <h1 class="button">マップを使う</h1>
      </a>
    </div>
    <div class="div2">
      <nuxt-link to="/about_us">
        <h1 class="about_us">About Us</h1>
      </nuxt-link>
    </div>
    <div class="div3">
      <a href="#">
        <h1 class="history">History</h1>
      </a>
    </div>
    <div class="div4">
      <a href="#">
        <h1 class="user_manual">User Manual</h1>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400);
@import url(https://fonts.googleapis.com/css?family=Lato:700);
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
@media only screen and (max-width: 500px) {
  .div1 {
    position: relative;
    top: 250vh;
  }

  .div2 {
    position: relative;
    top: 250vh;
  }

  .div3 {
    position: relative;
    top: 230vh;
  }

  .div4 {
    position: relative;
    top: 210vh;
  }
}

@media only screen and (min-width: 500px) {
  .div1 {
    position: relative;
  }
  .div2 {
    position: relative;
  }
  .div3 {
    position: relative;
  }
  .div4 {
    position: relative;
  }
}

.container {
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.25) 3%,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.6) 60%,
    rgba(0, 0, 0, 0.8) 90%,
    rgba(0, 0, 0, 0.8) 95%,
    black
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.25) 3%,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.6) 60%,
    rgba(0, 0, 0, 0.8) 90%,
    rgba(0, 0, 0, 0.8) 95%,
    black
  );
  background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.25) 3%,
        rgba(0, 0, 0, 0.5) 30%,
        rgba(0, 0, 0, 0.6) 60%,
        rgba(0, 0, 0, 0.8) 90%,
        rgba(0, 0, 0, 0.8) 95%,
        black
      )
      fixed,
    url("~assets/index/images/bg.png");
  background-color: black;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Lato, "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic,
    "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

a {
  color: white;
}

.div1 {
  color: white;
  text-align: center;
}

.button {
  display: inline-block;
  margin: 0;
  width: 350px;
  height: 75px;
  outline: none;
  border: 2px solid #fff;
  border-radius: 15px;
  background-color: transparent;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 50px;
  line-height: 75px;
}

.button::before,
.button::after {
  position: absolute;
  z-index: -1;
  display: block;
  content: "";
}

.button,
.button::before,
.button::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.div2 {
  color: white;
  text-align: center;
}

.about_us {
  position: relative;
  display: inline-block;
  padding-left: 25px;
  width: 80%;
  text-align: center;
  font-size: 40px;
}

.about_us:before {
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 0;
  border: none;
  border-bottom: solid 15px;
  border-left: solid 15px transparent;
  content: "";
}

.about_us:after {
  position: absolute;
  bottom: -3px;
  left: 10px;
  width: 100%;
  border-bottom: solid 3px;
  content: "";
}

.div3 {
  color: white;
  text-align: center;
}

.history {
  position: relative;
  display: inline-block;
  padding-left: 25px;
  width: 80%;
  font-size: 40px;
}

.history:before {
  position: absolute;
  right: -20px;
  bottom: -3px;
  width: 0;
  height: 0;
  border: none;
  border-right: solid 15px transparent;
  border-bottom: solid 15px;
  content: "";
}

.history:after {
  position: absolute;
  bottom: -3px;
  left: 10px;
  width: 100%;
  border-bottom: solid 3px;
  content: "";
}

.div4 {
  color: white;
  text-align: center;
}

.user_manual {
  position: relative;
  display: inline-block;
  padding-left: 25px;
  width: 80%;
  font-size: 40px;
}

.user_manual:before {
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 0;
  border: none;
  border-bottom: solid 15px;
  border-left: solid 15px transparent;
  content: "";
}

.user_manual:after {
  position: absolute;
  bottom: -3px;
  left: 10px;
  width: 100%;
  border-bottom: solid 3px;
  content: "";
}
</style>
