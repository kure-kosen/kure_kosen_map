// ボタン、メニューなどのデザイン aidmiya
// main.jsには手を付けていません

// ハンバーガーメニューのボタン。OpenLayersと「buttoncontrol.js」を使った。
var menubtn = new ol.control.Button ( 
 {
  html: '<i class="fa fa-bars"></i>',
  className: "menubtn",
  title: "メニューを表示",
  handleClick: function() {
  alert("とりあえずボタンの形だけできたから、メニューを表示するときにjQuery UIを使えるかと考えているところ。\nいや先にHTMLを書かねば。\nところでフルスクリーンボタンはここでよいのか…");
 }
});
map.addControl(menubtn);

