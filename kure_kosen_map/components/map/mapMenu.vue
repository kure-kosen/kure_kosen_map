<template>
  <nav
    id="menu"
    class="menu">
    <div class="menu-box">
      <div class="menu-title">呉高専マップ</div>
      <div>建物ジャンプ</div>
      <div class="menu-buildings">
        <ul>
          <li>図書館棟 (教育センター)</li>
          <li>管理棟</li>
          <li>普通教室棟</li>
          <li>機械工学科棟</li>
          <li>電気情報工学科棟</li>
          <li>建築学科棟</li>
          <li>環境都市工学科棟</li>
          <li>専攻科棟 (協働研究センター棟)</li>
          <li>第2普通教室棟</li>
          <li>静心館</li>
          <li>第1体育館</li>
          <li>第2体育館</li>
          <li>学生食堂</li>
          <li>技術センター</li>
        </ul>
      </div>
      <div>
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
</template>

<style scoped>
@import url("../../assets/map/map.css");

.menu {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  line-height: 170%;
  font-family: sans-serif;
}

.menu-box {
  padding: 0.7em;
}

.menu .menu-buildings {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.menu .menu-buildings li {
  border-bottom: 1px solid #ccc;
}

.menu li,
.menu a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
}

.menu li:hover,
.menu a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.menu .menu-buildings {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.menu .menu-title,
.menu .copyright {
  font-size: 0.7em;
}

.menu a {
  text-decoration: none;
}

li {
  list-style-type: none;
}

/* --- pc --- */
@media screen and (min-width: 741px) {
  .menu {
    color: #222;
    overflow: auto;
    width: 270px;
    height: 100vh;
    background-color: #f9f9fcf5;
  }

  .menu .menu-buildings {
    height: calc(100vh - 10em);
  }

  .menu a {
    color: #222;
  }
}

/* --- sp --- */
@media screen and (max-width: 740px) {
  .menu {
    color: #f9f9fc;
    height: 80vh;
    overflow: auto;
  }

  .menu .menu-buildings {
    height: calc(80vh - 10em);
  }

  .menu a {
    color: #f9f9fc;
  }
}
</style>
