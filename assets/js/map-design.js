// ボタン、メニューなどのデザイン aidmiya

// 要素
var menu_element = document.getElementById("menu");
var menubtn_element = document.getElementsByClassName("menubtn");

// ハンバーガーメニューのボタン。OpenLayersの「ol3-ext」(buttoncontrol.js)を使った。
// 注意:mapが宣言されるmain.jsを読み込んでからここを読ませないと動かない
var menubtn = new ol.control.Button ( 
	{
		html: '<i class="fa fa-bars"></i>',
		className: "menubtn",
		title: "メニューを表示",
		// 注意:handleClickには、外部の関数を指定すると、その関数がページを読み込んだときに自動実行される
		handleClick: function() {
			menu_element.classList.toggle("active");
		}
	}
);
map.addControl(menubtn);

