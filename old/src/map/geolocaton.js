// ol
import Feature from 'ol/Feature.js'
import Geolocation from 'ol/Geolocation.js'
import Point from 'ol/geom/Point.js'
import { Vector as VectorLayer } from 'ol/layer.js'
import { Vector as VectorSource } from 'ol/source.js'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js'
// ------------------------------------------------

const geolocationPlot = map => {
  let geolocation = new Geolocation({
    trackingOptions: {
      enableHighAccuracy: true
    },
    projection: map.getView().getProjection()
  })

  $('#track').on('change', function() {
    geolocation.setTracking(this.checked)
  })

  // update the HTML page when the position changes.
  geolocation.on('change', function() {
    $('#accuracy').text(geolocation.getAccuracy() + ' [m]')
    $('#altitude').text(geolocation.getAltitude() + ' [m]')
    $('#altitudeAccuracy').text(geolocation.getAltitudeAccuracy() + ' [m]')
    $('#heading').text(geolocation.getHeading() + ' [rad]')
    $('#speed').text(geolocation.getSpeed() + ' [m/s]')
  })

  // handle geolocation error.
  geolocation.on('error', error => {
    $('#info').html(error.message)
  })

  let accuracyFeature = new Feature()
  geolocation.on('change:accuracyGeometry', function() {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry())
  })

  let positionFeature = new Feature()
  positionFeature.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    })
  )
  geolocation.on('change:position', function() {
    let coordinates = geolocation.getPosition()
    positionFeature.setGeometry(coordinates ? new Point(coordinates) : null)
  })

  new VectorLayer({
    map: map,
    source: new VectorSource({
      features: [accuracyFeature, positionFeature]
    })
  })
}

export default geolocationPlot
