// 現在地の円
var geocycle = new ol.layer.Vector({
                source: new ol.source.Vector({
                  features: [accuracyFeature, positionFeature]
                })
              });

//呉市オープンデータのaed
//作成日:20171218
var aed = new ol.layer.Vector({
            title: 'AED',
            source: new ol.source.Vector({
              format: new ol.format.GeoJSON(),
              url: 'C:/Users/kazu/Documents/GitHub/kure_kosen_map/assets/geojson/20171224.geojson',
              crossOrigin: 'anonymous'
            }),
            style: new ol.style.Style({
              image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
                radius: 10,
                fill: new ol.style.Fill({
                  color: '#ffff00'
                })
              }))
            })
          });

//kmlのサンプル
var kml = new ol.layer.Vector({
            title: 'kml',
            source: new ol.source.Vector({
              format: new ol.format.KML(),
              url: 'C:/Users/kazu/Documents/GitHub/kure_kosen_map/assets/kml/kokudo.kml',
              crossOrigin: 'anonymous'
            })
          });
