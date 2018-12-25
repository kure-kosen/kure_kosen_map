<template>
  <div>
    <MyMap />
    <div class="fullscreenlayer">
      <slideMenu>

        <nav
          id="menu"
          class="menu">
          <div class="menu-box">
            <div class="menu-title">呉高専マップ</div>
            <div>建物ジャンプ</div>

            <div class="menu-buildings">
              <ul>
                <li>図書館棟<br>(教育センター)</li>
                <li>管理棟</li>
                <li>普通教室棟</li>
                <li>機械工学科棟</li>
                <li>電気情報工学科棟</li>
                <li>建築学科棟</li>
                <li>環境都市工学科棟</li>
                <li>専攻科棟<br> (協働研究センター棟)</li>
                <li>第2普通教室棟</li>
                <li>静心館</li>
                <li>(第1)体育館</li>
                <li>第2体育館</li>
                <li>(学生)食堂</li>
                <li>技術センター</li>
                <li>ダミー</li>
                <li>ダミー</li>
                <li>ダミー</li>
                <li>ダミー</li>
                <li>ダミー</li>
                <li>ダミー</li>
              </ul>
            </div>
            <div>
              <a
                href="#manual"
                title="コンテンツ準備中">
                <div>準備中</div>
              </a>
              <a
                href="#history"
                title="コンテンツ準備中">
                <div>準備中</div>
              </a>
            </div>
            <div>
              <a
                href="#terms"
                title="コンテンツ準備中">
                <div>準備中</div>
              </a>
              <a
                href="about_us.html"
                title="About Us">
                <div>About Us</div>
              </a>
              <a
                href="https://www.kure-nct.ac.jp/"
                title="呉高専HPへ">
                <div>呉高専HPへ</div>
              </a>
            </div>
            <div class="copyright">
              &copy;2018 - Kuremap Team
            </div>
          </div>
        </nav>

      </slideMenu>

    </div>
  </div>
</template>

<script>
import MyMap from "../components/mymap";
import slideMenu from "../components/slideMenuFromTop";

export default {
  components: {
    MyMap,
    slideMenu
  }
};
</script>

<style scoped>
@import url("../assets/map/map.css");
@import url("../assets/map/map-design.css");
</style>
