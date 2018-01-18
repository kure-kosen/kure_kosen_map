var kakudo = 0;
var timer;

$('#direction').on('change', function(){
   if($("#direction").prop('checked')) {
     timer = setInterval("getdir()", 500);
   }
   else {
    clearInterval(timer);
    kakudo = 0;
    view.animate({
      rotation: 0,
    });
   }
});

function getdir() {
  window.addEventListener('deviceorientation', function(event) {
    kakudo = event.webkitCompassHeading;
    view.animate({
      rotation: kakudo*Math.PI/180,
    });
  });
}