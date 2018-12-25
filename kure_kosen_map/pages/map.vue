<template>
  <div>
    <MyMap />
    <div class="fullscreenlayer">
      <!-- 開くボタン -->
      <div
        id="wrap-openmenu"
        class="wrap-menubtn wrap-openmenu ol-unselectable ol-control">
        <button
          id="openmenu"
          class="menubtn"
          type="button"
          title="メニューを表示"
          @click="toggleMenu">
          <i class="fa fa-bars"/>
        </button>
      </div>

      <!-- ハンバーガーメニュー -->
      <nav
        id="menu"
        class="menu">
        <div class="menu-box">
          <div class="menu-top">
            <!-- 閉じるボタン -->
            <div class="ol-control wrap-menubtn wrap-closemenubtn">
              <button
                id="closemenu"
                class="menubtn closemenubtn"
                type="button"
                title="メニューを閉じる"
                @click="toggleMenu">
                <i class="fa fa-times"/>
              </button>
            </div>
            <div class="menu-title">Menu</div>
          </div>
          <ul class="menu-list">
            <li class="menu-nohover">建物ジャンプ</li>
          </ul>
          <hr>
          <div class="menu-buildings">
            <ul>
              <li>図書館棟<br>(教育センター)</li>
              <li> 管理棟 </li>
              <li> 普通教室棟 </li>
              <li> 機械工学科棟 </li>
              <li> 電気情報工学科棟 </li>
              <li> 建築学科棟 </li>
              <li> 環境都市工学科棟 </li>
              <li> 専攻科棟<br> (協働研究センター棟) </li>
              <li> 第2普通教室棟 </li>
              <li> 静心館 </li>
              <li> (第1)体育館 </li>
              <li> 第2体育館 </li>
              <li> (学生)食堂 </li>
              <li> 技術センター </li>
              <li>ダミー</li>
              <li>ダミー</li>
              <li>ダミー</li>
              <li>ダミー</li>
              <li>ダミー</li>
              <li>ダミー</li>
            </ul>
          </div>
          <ul class="menu-list menu-content">
            <a
              href="#manual"
              title="コンテンツ準備中">
              <li>準備中</li>
            </a>
            <a
              href="#history"
              title="コンテンツ準備中">
              <li>準備中</li>
            </a>
          </ul>
          <ul class="menu-list menu-about">
            <a
              href="#terms"
              title="コンテンツ準備中">
              <li>準備中</li>
            </a>
            <a
              href="about_us.html"
              title="About Us">
              <li>About Us</li>
            </a>
            <a
              href="https://www.kure-nct.ac.jp/"
              title="呉高専HPへ">
              <li>呉高専HPへ</li>
            </a>
          </ul>
          <div class="footer">
            &copy;2017 - Kuremap Team
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import MyMap from "../components/mymap";

export default {
  components: {
    MyMap
  },
  methods: {
    toggleMenu() {
      document.querySelector("#menu").classList.toggle("active");
      document.querySelector("#wrap-openmenu").classList.toggle("menuactive");
      document.querySelector("#search").classList.toggle("menuactive");
    }
  }
};
</script>

<style scoped>
@import url("../assets/map/map.css");
@import url("../assets/map/map-design.css");
</style>
