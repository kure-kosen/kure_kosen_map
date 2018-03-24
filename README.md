# kure_kosen_map
---
## 使い方
1. 各自featureブランチで開発する
1. ある程度できたらdevelpブランチにプルリクエスト、マージする
1. 動作確認終了後masterブランチにマージ
---
## 開発環境
* OpenLayers  : 4.5.0
* jQuery      : 3.2.1(slim)
* Bootstrap   : 4.0.0-beta.2
* popper      : 1.12.3
* FontAwesome : 5.0.2
---
## 開発時の注意
* ローカルのgeojsonが読めないときは、CORSが原因の可能性あり

1. Chromeを終了
1. Win + R で下記を実行
```chrome.exe --disable-web-security --user-data-dir```
---
## コードの統一化
### Tag
* CSS             : ```<link rel="stylesheet" type="text/css" href="assets/">```
* JavaScript      : ```<script type="text/javascript" src="assets/"></script>```

### CDN
* jQuery          : ```<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>```

* Popper          : ```<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>```

* Bootstrap(JS)   : ```<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>```

* Bootstrap(CSS)  : ```<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">```

* Font Awesome    : ```<link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet">```

* Set             : ```<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet">```

---
## aidmiya
### ここでの編集方針
1. 基本的に自分がいじるのは自分で作ったファイルの中(map-design.cssなど)
1. いじりたいところが他の人の作ったファイルにあったら、そのファイルをいじくる(map.cssなど)

### 動作テストについて
* aidmiyaのPC上での動作確認: Firefox(57 32bit Ubuntu)、Chromium(63 32bit Ubuntu)
* aidmiyaのモバイルでの動作確認: Safari running on iPhone 6S Plus
* Safariのシークレットモードで動作確認する時、CSSが読み込まれないことがある。その時は、シークレットを解除してリロードしてみよう
