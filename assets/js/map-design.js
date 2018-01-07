// ボタン、メニューなどのデザイン aidmiya

// 読み込み時
window.onload = function() {
	popup.addPopupClass('shadow');
};

// 要素
var menu_element = document.getElementById("menu");
var openmenu_element = document.getElementById("openmenu");
var closemenu_element = document.getElementById("closemenu");
var wrapopen_element = document.getElementById("wrap-openmenu");

// ハンバーガーボタン(buttonたぐ)の動作
openmenu_element.onclick = function() {toggleMenu()};
closemenu_element.onclick = function() {toggleMenu()};

function toggleMenu() {
	menu_element.classList.toggle("active");
	wrapopen_element.classList.toggle("menuactive");
}

// ハンバーガーメニューのボタン。OpenLayersの「ol3-ext」(buttoncontrol.js)を使った。
// 注意:mapが宣言されるmain.jsを読み込んでからここを読ませないと動かない
/*
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
*/

