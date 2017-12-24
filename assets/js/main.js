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
    overlays: [popup],
    view: view
  });



var select = new ol.interaction.Select({});
map.addInteraction(select);

// On selected => show/hide popup
select.getFeatures().on(['add'], function(e)
  { var feature = e.element;
    var content = "";
    content += "<table border=1>"
    content += "<tr><td>number</td><td>" + feature.get("number") + "</td></tr>"
    content += "<tr><td>name</td><td>" + feature.get("name") + "</td></tr>"
    content += "<tr><td>address</td><td>" + feature.get("address") + "</td></tr>"
    content += "</table>"
    popup.show(feature.getGeometry().getCoordinates(), content);
  })
select.getFeatures().on(['remove'], function(e)
  { popup.hide();
  })

  var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
      });
  map.addControl(layerSwitcher);

})();