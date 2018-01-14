var map = new ol.Map({
  target: 'map',
  interactions: ol.interaction.defaults().extend([
    new ol.interaction.DragRotateAndZoom()
  ]),
  controls: ol.control.defaults().extend([
    new ol.control.FullScreen({source: 'fullscreen'}),new app.RotateNorthControl(),new ol.control.ZoomSlider()
  ]),
  layers: [
    new ol.layer.Group({
      'title': 'Base maps',
      layers: [kokudo, osm,
        // assets/layers/base.jsで定義したものをカンマで区切って書く
        // watercolorlabels,
        // watercolor,
      ]
    }),
    new ol.layer.Group({
      title: 'Overlays',
      layers: [
      // aed, kml, geocycle,
       // tile,
      // vectorSource
      ]
    })
  ],
  overlays: [popup],
  view: view
});

var select = new ol.interaction.Select({});
map.addInteraction(select);

// On selected => show/hide popup
select.getFeatures().on(['add'], function(e) {
  var feature = e.element;
  var content = "";
  content += "<table border=1>"
  content += "<tr><td>number</td><td>" + feature.get("number") + "</td></tr>"
  content += "<tr><td>name</td><td>" + feature.get("name") + "</td></tr>"
  content += "<tr><td>address</td><td>" + feature.get("address") + "</td></tr>"
  content += "<tr><td>region</td><td>" + feature.get("region") + "</td></tr>"
  content += "<tr><td>commune</td><td>" + feature.get("commune") + "</td></tr>"
  content += "<tr><td>text</td><td>" + feature.get("text") + "</td></tr>"
  content += "</table>"
  popup.show(feature.getGeometry().getCoordinates(), content);
})
select.getFeatures().on(['remove'], function(e) {
  popup.hide();
})

var layerSwitcher = new ol.control.LayerSwitcher({
  tipLabel: 'Légende' // Optional label for button
});
map.addControl(layerSwitcher);

map.addLayer(new ol.layer.Vector({
  name: 'Fonds de guerre 14-18',
  source: vectorSource,
  style: new ol.style.Style({
    image: new ol.style.Icon({
      src: path + 'assets/icon/camera.png',
      scale: 0.8
    })
  })
}));

// Control Select

// var select = new ol.interaction.Select({});
// map.addInteraction(select);

// Set the control grid reference
var search = new ol.control.SearchFeature({ //target: $(".options").get(0),
  source: vectorSource,
  property: $(".options select").val()
});
map.addControl(search);
// Select feature when click on the reference index
search.on('select', function (e) {
  select.getFeatures().clear();
  select.getFeatures().push(e.search);
  var p = e.search.getGeometry().getFirstCoordinate();
  map.getView().animate({
    center: p
  });
});