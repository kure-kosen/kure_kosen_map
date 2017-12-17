var map = new ol.Map({
  target: 'map',
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragRotateAndZoom()
  ]),
  controls: ol.control.defaults().extend([
    new ol.control.FullScreen()
  ]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([132.601271,34.232102]),
    zoom: 16,
    // minZoom: 15,//挙動がおかしいからやめたほうがいいかも
    // maxZoom: 17
    // そもそもいらないかな？
  })
});


// $.getJSON("assets/geojson/common.geojson", function (data) {
//     L.geoJson(data, {
//       style: {
//         "weight": 3,
//         "color": "#F42C87",
//       }
//     }).addTo(map);
// });

// ,
//     new ol.layer.Vector({
//       title: 'added Layer',
//       source: new ol.source.Vector({
//         url: "../geojson/common.geojson",
//         format: new ol.format.GeoJSON()
//       })
//     })