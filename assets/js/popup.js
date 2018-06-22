var popup = new ol.Overlay.Popup({
  onshow: function() {
    // console.log("You opened the box");
  },
  onclose: function() {
    // console.log("You close the box");
  },
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});
