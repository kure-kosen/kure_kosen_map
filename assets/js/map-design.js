// ボタン、メニューなどのデザイン aidmiya

// 要素
var menu_element = document.getElementById("menu");
var openmenu_element = document.getElementById("openmenu");
var closemenu_element = document.getElementById("closemenu");
var wrapopen_element = document.getElementById("wrap-openmenu");
var searchform_element = document.getElementById("search");

// ハンバーガーボタン(buttonたぐ)の動作
openmenu_element.onclick = function() {toggleMenu()};
closemenu_element.onclick = function() {toggleMenu()};

function toggleMenu() {
	menu_element.classList.toggle("active");
	wrapopen_element.classList.toggle("menuactive");
	searchform_element.classList.toggle("menuactive");
}
