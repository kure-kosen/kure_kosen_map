var _base = new ol.layer.Group({
  title: 'Base maps',
  layers: [
    kokudo,
    osm
    // assets/layers/base.jsで定義したものをカンマで区切って書く
    // watercolorlabels,
    // watercolor,
  ]
});

var _overlay = new ol.layer.Group({
  title: 'Overlays',
  layers: [
    aed,
    kml,
    geocycle,
    tile
    // vectorSource
  ]
});

var _layers = [_base, _overlay];

var map = new ol.Map({
  target: 'map',
  layers: _layers,
  overlays: [popup],
  view: view
});

map.addControl(new ol.control.FullScreen({ source: 'fullscreen' }));
map.addControl(new ol.control.ZoomSlider());
map.addControl(new ol.control.ScaleLine());
map.addControl(new ol.control.LayerSwitcher());
map.addControl(search);

map.addInteraction(new ol.interaction.DragRotateAndZoom());
map.addInteraction(select);

map.addLayer(
  new ol.layer.Vector({
    name: 'Fonds de guerre 14-18',
    source: vectorSource,
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: path + 'assets/icon/camera.png',
        scale: 0.8
      })
    })
  })
);

ol.hash(map);

// 北ボタン
$('#north_button').on('click', function() {
  map.getView().setRotation(0);
});
