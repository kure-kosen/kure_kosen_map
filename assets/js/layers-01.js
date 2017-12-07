var vectorLayer = new ol.layer.Vector({
  title: 'circle',
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: 'C:/Users/kazu/Documents/GitHub/kure_kosen_map/assets/geojson/geojson.js',
    crossOrigin: 'anonymous'
  }),
  style: new ol.style.Style({
    image: new ol.style.Circle( /** @type {olx.style.IconOptions} */ ({
      radius: 20,
      fill: new ol.style.Fill({
        color: '#ffff00'
      })
    }))
  })
});