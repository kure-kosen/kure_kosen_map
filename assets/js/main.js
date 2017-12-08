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
        layers: [
          new ol.layer.Tile({
            title: '国土地理院',
            type: 'base',
            visible: false,//trueならば最初から表示してくれる、ただし1つまで
            source: new ol.source.XYZ({
              attributions: [
                new ol.Attribution({
                  html: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
                })
              ],
              url: "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
              projection: "EPSG:3857"
            })
          }),
      new ol.layer.Group({
        title: 'Water color with labels',
        type: 'base',
        combine: true,
        visible: false,
        layers: [
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'watercolor'
          })
        }),
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'terrain-labels'
          })
        })
        ]
      }),
      new ol.layer.Tile({
        title: 'Water color',
        type: 'base',
        visible: false,
        source: new ol.source.Stamen({
          layer: 'watercolor'
        })
      }),
      new ol.layer.Tile({
        title: 'OSM',
        type: 'base',
        visible: true,
        source: new ol.source.OSM()
      })
      ]
    }),
    new ol.layer.Group({
      title: 'Overlays',
      layers: [vectorLayer,kml,
        new ol.layer.Image({
          title: 'Countries',
          source: new ol.source.ImageArcGISRest({
            ratio: 1,
            params: {'LAYERS': 'show:0'},
            url: "https://ons-inspire.esriuk.com/arcgis/rest/services/Administrative_Boundaries/Countries_December_2016_Boundaries/MapServer"
          })
        })
      ]
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

  var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
      });
  map.addControl(layerSwitcher);

})();