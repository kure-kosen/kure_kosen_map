// ボタン、メニューなどのデザイン aidmiya

// 要素
var menu_element = document.getElementById("menu");
var openmenu_element = document.getElementById("openmenu");
var closemenu_element = document.getElementById("closemenu");
var wrapopen_element = document.getElementById("wrap-openmenu");
var searchform_element = document.getElementById("search");

// 検索ボックスの[x]ボタンの追加・動作
var searchreset_element = document.createElement("div");
searchreset_element.innerHTML = '<input type="reset" value="&#61453;" class="fa">';
var search_element = document.getElementsByClassName("ol-search")[0];
search_element.appendChild(searchreset_element);
searchreset_element.onclick = function() {document.querySelector(".ol-search .search").value=""};

// ハンバーガーボタン(buttonたぐ)の動作
openmenu_element.onclick = function() {toggleMenu()};
closemenu_element.onclick = function() {toggleMenu()};

function toggleMenu() {
	menu_element.classList.toggle("active");
	wrapopen_element.classList.toggle("menuactive");
	searchform_element.classList.toggle("menuactive");
}

