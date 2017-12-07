# kure_kosen_map

## 使い方
1. 各自featureブランチで開発する
1. ある程度できたらdevelpブランチにプルリクエスト、マージする
1. 動作確認終了後masterブランチにマージ

## 開発環境
* OpenLayers : 4.5.0
* jQuery     : 3.2.1(min) : geojsonのデータを取り出すために（現在未実装）

## 開発時の注意
* ローカルのgeojsonが読めないときは、CORSが原因の可能性あり
対策
1 Chromeを終了
 Win + R で'chrome.exe --disable-web-security --user-data-dir'で起動