(function() {
  var map = new ol.Map({
    target: 'map',
    interactions: ol.interaction.defaults().extend([
      new ol.interaction.DragRotateAndZoom()
    ]),
    controls: ol.control.defaults().extend([
      new ol.control.FullScreen()
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
        layers: [aed, kml, geocycle]
      })
    ],
    view: view
  });

  var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
      });
  map.addControl(layerSwitcher);
})();