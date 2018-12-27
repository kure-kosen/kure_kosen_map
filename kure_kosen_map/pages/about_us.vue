<template>
  <div class="___container">
    <!-- start navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a
        class="navbar-brand"
        href="#">Fixed navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>
      <div
        id="navbarCollapse"
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#">Link</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search">
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!-- end navbar -->
    <!-- start contents -->
    <div class="container">
      <div class="jumbotron">
        <div class="row title line1">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-3 pl-5 pr-5">
            <h1>開発メンバー</h1>
          </div>
        </div>
        <div class="row koba">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/koba/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/koba/avator.png">
                <h4 class="card-title mt-3">Kobatake Kazuhiro</h4>
                <div class="meta">
                  <a>リーダー&amp;マップ開発</a>
                </div>
                <div class="card-text">三角チョコパイは黒派です </div>
              </div>
              <div class="card-footer">
                <a href="https://github.com/kobakazu10">
                  <i
                    class="fab fa-github fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="https://www.facebook.com/kobakazu0429">
                  <i
                    class="fab fa-facebook fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/kobakazu100">
                  <i
                    class="fab fa-twitter fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- ====================================================== -->
        <div class="row etc">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/mori/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/mori/avator.jpg">
                <h4 class="card-title mt-3">Mori Kazuya</h4>
                <div class="meta">
                  <a>トップのデザイン&amp;提督（岩川基地配属）etc...</a>
                </div>
                <div class="card-text">電ちゃんｶﾜｲｲﾔｯﾀ&#8252;　ロボコンはいいぞ </div>
              </div>
              <div class="card-footer">
                <a href="https://github.com/Forest1717">
                  <i
                    class="fab fa-github fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="http://steamcommunity.com/profiles/76561198370581912/">
                  <i
                    class="fab fa-steam-square fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/3dsForest">
                  <i
                    class="fab fa-twitter fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/miyamoto/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/miyamoto/avator.jpg">
                <h4 class="card-title mt-3">Miyamoto Daiya</h4>
                <div class="meta">
                  <a>地図ページのデザイン制作</a>
                </div>
                <div class="card-text">アナログ人間 </div>
              </div>
              <div class="card-footer">
                <i
                  class="fab fa-circle fa-2x fa-fw"
                  aria-hidden="true"/>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/tommy/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/tommy/avator.jpg">
                <h4 class="card-title mt-3">Tomihara Kaito</h4>
                <div class="meta">
                  <a>CADでマップ制作(M科棟, E科棟)</a>
                </div>
                <div class="card-text">努力は必ず報われる </div>
              </div>
              <div class="card-footer">
                <i
                  class="fab fa-circle fa-2x fa-fw"
                  aria-hidden="true"/>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/nitta/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/nitta/avator.jpg">
                <h4 class="card-title mt-3">Nitta Rikuto</h4>
                <div class="meta">
                  <a>CADでマップ制作(A科棟, C科棟, 専攻科)</a>
                </div>
                <div class="card-text">麺は細めで </div>
              </div>
              <div class="card-footer">
                <i
                  class="fab fa-circle fa-2x fa-fw"
                  aria-hidden="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ====================================================== -->
      <div class="jumbotron">
        <div class="row title line2">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-3 pl-5 pr-5">
            <h1>スペシャルサンクス</h1>
          </div>
        </div>
        <div class="row thanks1">
          <div class="col-sm-12 col-md-6">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/ochiai/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/ochiai/avator.jpg">
                <h4 class="card-title mt-3">Ochiai Kenji</h4>
                <div class="meta">
                  <a>宮崎県総合政策部情報政策課</a>
                </div>
                <div class="card-text">ガバメントギークと呼ばれたい地方公務員 </div>
              </div>
              <div class="card-footer">
                <a
                  href="https://hgis.pref.miyazaki.lg.jp/hinata/"
                  class="footerleft">
                  <span>ひなたGIS</span>
                </a>
                <i
                  class="fab fa-circle fa-2x fa-fw"
                  aria-hidden="true"/>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/ohtsuka/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/ohtsuka/avator.png">
                <h4 class="card-title mt-3">Ohtsuka Kohei</h4>
                <div class="meta">
                  <a>Code for NARA 横浜支部</a>
                </div>
                <div class="card-text">位置情報サービスクリエイター </div>
              </div>
              <div class="card-footer">
                <a
                  href="https://github.com/code4nara/Maplat/wiki"
                  class="footerleft">
                  <span>Maplat</span>
                </a>
                <a href="https://github.com/kochizufan">
                  <i
                    class="fab fa-github fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="https://www.facebook.com/kochizufan">
                  <i
                    class="fab fa-facebook fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- ====================================================== -->
        <div class="row thanks2">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/chanyou/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/chanyou/avator.jpg">
                <h4 class="card-title mt-3">Nakamura Yu</h4>
                <div class="meta">
                  <a>TA</a>
                </div>
                <div class="card-text">やっほー！ </div>
              </div>
              <div class="card-footer">
                <a href="https://github.com/chanyou0311">
                  <i
                    class="fab fa-github fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/chanyou0311">
                  <i
                    class="fab fa-twitter fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/sin/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/sin/avator.jpg">
                <h4 class="card-title mt-3">Shintani Teppei</h4>
                <div class="meta">
                  <a>Q&amp;Aおじさん</a>
                </div>
                <div class="card-text">Q&amp;Aを答えて早21年... </div>
              </div>
              <div class="card-footer">
                <a
                  href="http://euglena1215.hatenablog.jp/"
                  class="footerleft">
                  <span>男女比はカレーと&hellip;</span>
                </a>
                <a href="https://github.com/euglena1215">
                  <i
                    class="fab fa-github fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/euglena1215">
                  <i
                    class="fab fa-twitter fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4">
            <div class="card mb-5">
              <img
                class="card-img-top"
                src="~assets/about_us/images/kaneko/bg.jpg">
              <div class="card-block">
                <img
                  class="card-img-top avator"
                  src="~assets/about_us/images/kaneko/avator.jpg">
                <h4 class="card-title mt-3">Kaneko Taira</h4>
                <div class="meta">
                  <a>名誉先輩()</a>
                </div>
                <div class="card-text">vimはいいぞ </div>
              </div>
              <div class="card-footer">
                <a
                  href="http://10-1.hatenablog.com/"
                  class="footerleft">
                  <span>十を聞いて一を知る</span>
                </a>
                <a href="https://github.com/taira120">
                  <i
                    class="fab fa-github fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/Guri1999120">
                  <i
                    class="fab fa-twitter fa-2x fa-fw footerright"
                    aria-hidden="true"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css");
@import url("https://use.fontawesome.com/releases/v5.0.2/css/all.css");

.___container {
  padding-top: 4.5rem;
  min-height: 75rem;
  background-image: url("~assets/about_us/images/pta01.png");
  font-size: 14px;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
}

.jumbotron {
  background-color: rgba(255, 255, 255, 0.5);
}

h5 {
  margin: 0;
  font-weight: 700;
  font-size: 1.28571429em;
  line-height: 1.2857em;
}

.card {
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  max-width: 250px;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  font-size: 1em;
}

.card-block {
  position: relative;
  margin: 0;
  padding: 1em;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  box-shadow: none;
  font-size: 1em;
}

.card-img-top {
  display: block;
  width: 100%;
  height: 140.625%;
}

.card-title {
  font-weight: 700;
  font-size: 1.28571429em;
  line-height: 1.2857em;
}

.card-text {
  clear: both;
  margin-top: 0.5em;
  color: rgba(0, 0, 0, 0.68);
}

.card-footer {
  padding: 0.75em 1em;
  max-width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
  background: #fff;
  text-align: left;
}

.footerright {
  float: right;
  text-align: right;
}

.text-bold {
  font-weight: 700;
}

.meta {
  color: rgba(0, 0, 0, 0.4);
  font-size: 1em;
}

.meta a {
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
}

.meta a:hover {
  color: rgba(0, 0, 0, 0.87);
}

.fa-twitter:before {
  color: #00aced;
}

.fa-facebook:before {
  color: #305097;
}

.fa-github:before {
  color: #333333;
}

.fa-steam-square:before {
  color: gray;
}

.fa-circle:before {
  display: none;
}

.avator {
  margin-top: -85px;
  margin-right: auto;
  margin-left: auto;
  width: 130px;
  height: auto;
  border-radius: 50%;
}

.title div h1 {
  font-size: calc(20px + 1.5vw);
}

h1 {
  text-align: center;
}

h1 {
  position: relative;
  border-bottom: solid 3px #000000;
}

.line1 h1:after {
  position: absolute;
  bottom: -3px;
  display: block;
  width: 20%;
  border-bottom: solid 3px #003fff;
  content: " ";
}

.line2 h1:after {
  position: absolute;
  bottom: -3px;
  display: block;
  width: 20%;
  border-bottom: solid 3px #ff2020;
  content: " ";
}
</style>
