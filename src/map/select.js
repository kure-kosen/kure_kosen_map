import { Select } from 'ol/interaction'
import MyPopup from './popup'

const MySelect = new Select()

MySelect.getFeatures().on(['add'], e => {
  let feature = e.element
  let coordinate = feature.getGeometry().getCoordinates()
  let content = ''
  content += '<table border=1>'
  content += '<tr><td>number</td><td>' + feature.get('number') + '</td></tr>'
  content += '<tr><td>name</td><td>' + feature.get('name') + '</td></tr>'
  content += '<tr><td>address</td><td>' + feature.get('address') + '</td></tr>'
  content += '<tr><td>region</td><td>' + feature.get('region') + '</td></tr>'
  content += '<tr><td>commune</td><td>' + feature.get('commune') + '</td></tr>'
  content += '<tr><td>text</td><td>' + feature.get('text') + '</td></tr>'
  content += '</table>'
  MyPopup.show(coordinate, content)
})

MySelect.getFeatures().on(['remove'], e => {
  MyPopup.hide()
})

export default MySelect
