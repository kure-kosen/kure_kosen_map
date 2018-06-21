var aboutyou = document.getElementById('aboutyou');
var knctstudent = document.getElementById('knctstudent');
var onlyknct = document.getElementById('onlyknct');
var grade = document.getElementById('grade');
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');

// 呉高専生のみの質問を表示・非表示
aboutyou.addEventListener('change', function (e) {
  if ( knctstudent.selected ) {
    onlyknct.style.display = 'block';
  }
  else {
    onlyknct.style.display = 'none';
  }
});

// 専攻科ならば自動で学科(専攻)決定
grade.addEventListener('change', function (e) {
  if ( s1.selected || s2.selected ) {
    selectS(); // 専攻の自動選択
  }
});

// 専攻の自動選択
function selectS() {
  let options = document.getElementById('department').getElementsByTagName('option');
  for ( var i=0; i<options.length; i++ ) {
    if ( options[i].value == 'S' ) {
      options[i].selected = true;
      break;
    }
  }
}

