var kakudo = 0;

function hogehoge() {
  window.addEventListener('deviceorientation', function(event) {
    kakudo = event.webkitCompassHeading;
  });
}

function fuga() {
  setInterval("hogehoge()", 1000);
}