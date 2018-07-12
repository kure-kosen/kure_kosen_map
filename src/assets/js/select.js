var select = new ol.interaction.Select();

// On selected => show/hide popup
select.getFeatures().on(['add'], function(e) {
  var feature = e.element;
  var content = '';
  content += '<table border=1>';
  content += '<tr><td>number</td><td>' + feature.get('number') + '</td></tr>';
  content += '<tr><td>name</td><td>' + feature.get('name') + '</td></tr>';
  content += '<tr><td>address</td><td>' + feature.get('address') + '</td></tr>';
  content += '<tr><td>region</td><td>' + feature.get('region') + '</td></tr>';
  content += '<tr><td>commune</td><td>' + feature.get('commune') + '</td></tr>';
  content += '<tr><td>text</td><td>' + feature.get('text') + '</td></tr>';
  content += '</table>';
  popup.show(feature.getGeometry().getCoordinates(), content);
});

select.getFeatures().on(['remove'], function(e) {
  popup.hide();
});
