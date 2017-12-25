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
              url: '../geojson/20171224.geojson',
              crossOrigin: 'anonymous'
            }),
            style: new ol.style.Style({
              image: new ol.style.Icon({
                src:"../icon/aed.png", scale: 0.2
              })
            })
          });

//kmlのサンプル
var kml = new ol.layer.Vector({
            title: 'kml',
            source: new ol.source.Vector({
              format: new ol.format.KML(),
              url: '../kml/kokudo.kml',
              crossOrigin: 'anonymous'
            })
          });
