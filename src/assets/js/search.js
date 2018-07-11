var search = new ol.control.SearchFeature({
  source: vectorSource,
  property: $('.options select').val()
});

search.on('select', function(e) {
  select.getFeatures().clear();
  select.getFeatures().push(e.search);
  var p = e.search.getGeometry().getFirstCoordinate();
  map.getView().animate({
    center: p
  });
});
