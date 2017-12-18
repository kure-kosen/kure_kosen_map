//地理院タイル
var kokudo = new ol.layer.Tile({
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
            });

// OpenStreetMap
var osm = new ol.layer.Tile({
            title: 'OSM',
            type: 'base',
            visible: true,
            source: new ol.source.OSM()
          });

//なんか昔っぽいやつ(安芸阿賀周辺のレベル16程度はないため表示されない)
var watercolor = new ol.layer.Tile({
                  title: 'Water color',
                  type: 'base',
                  visible: false,
                  source: new ol.source.Stamen({
                    layer: 'watercolor'
                  })
                });

//なんか昔っぽいやつのラベル付き
var watercolorlabels = new ol.layer.Group({
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
                      });

