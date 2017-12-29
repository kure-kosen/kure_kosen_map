var view = new ol.View({
  center: ol.proj.fromLonLat([132.601271,34.232102]),
  zoom: 16,
  // minZoom: 15,//挙動がおかしいからやめたほうがいいかも
  // maxZoom: 17
  // そもそもいらないかな？
  rotation: kakudo*Math.PI/180,
});