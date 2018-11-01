# kure_kosen_map

## 使い方

1.  各自 feature ブランチで開発する
2.  ある程度できたら develp ブランチにプルリクエスト、マージする
3.  動作確認終了後 master ブランチにマージ

## 開発環境

- OpenLayers : 4.5.0
- jQuery : 3.2.1(slim)
- Bootstrap : 4.0.0-beta.2
- popper : 1.12.3
- FontAwesome : 5.0.2

## 開発時の注意

- ローカルの geojson が読めないときは、CORS が原因の可能性あり

  1.Chrome を終了
  1.Win + R で下記を実行
  `chrome.exe --disable-web-security --user-data-dir`

## コードの統一化

### Tag

- CSS : `<link rel="stylesheet" type="text/css" href="assets/">`
- JavaScript : `<script type="text/javascript" src="assets/"></script>`

### CDN

- jQuery : `<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>`

- Popper : `<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>`

- Bootstrap(JS) : `<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>`

- Bootstrap(CSS) : `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">`

- Font Awesome : `<link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet">`

- Set :

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet">
```

- Drawer(モバイル向けメニュー) :

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.1.3/iscroll.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/drawer/3.1.0/js/drawer.min.js"></script>
```

* `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/drawer/3.1.0/css/drawer.min.css">` についてはローカル

## aidmiya

### ここでの編集方針

1.  基本的に自分がいじるのは自分で作ったファイルの中(map-design.css など)
1.  いじりたいところが他の人の作ったファイルにあったら、そのファイルをいじくる(map.css など)

### 動作テストについて

- aidmiya の PC 上での動作確認: Firefox(57 32bit Ubuntu)、Chromium(63 32bit Ubuntu)
- aidmiya のモバイルでの動作確認: Safari running on iPhone 6S Plus
- Safari のシークレットモードで動作確認する時、CSS が読み込まれないことがある。その時は、シークレットを解除してリロードしてみよう

## 新開発環境について（執筆中）

### エディタ周り

vscode なら以下の拡張機能を入れる

- [Prettier formatter for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### パッケージ周り

#### yarn

1.  [これ](https://qiita.com/masterkey1009/items/50f95b1187646a7db385)などを参考に yarn を入れる
1.  クローン後 `yarn install` する

### プルリクエストについて

- `yarn format`を使ってコードを`prettier`で整形しておくこと
