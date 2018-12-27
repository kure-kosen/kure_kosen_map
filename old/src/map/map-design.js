let menu_element = document.getElementById('menu')
let openmenu_element = document.getElementById('openmenu')
let closemenu_element = document.getElementById('closemenu')
let wrapopen_element = document.getElementById('wrap-openmenu')
let searchform_element = document.getElementById('search')

// ハンバーガーボタン(buttonタグ)の動作
openmenu_element.onclick = function() {
  toggleMenu()
}

closemenu_element.onclick = function() {
  toggleMenu()
}

function toggleMenu() {
  menu_element.classList.toggle('active')
  wrapopen_element.classList.toggle('menuactive')
  searchform_element.classList.toggle('menuactive')
}
