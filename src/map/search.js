import ol_control_SearchFeature from 'ol-ext/control/SearchFeature'

import MySelect from './select'
import { searchLayer } from './layers/overlay'

const MySearch = map => {
  const MySearch = new ol_control_SearchFeature({
    source: searchLayer.values_.source,
    property: 'address',
    className: 'mysearch'
  })

  MySearch.on('select', function(e) {
    MySelect.getFeatures().clear()
    MySelect.getFeatures().push(e.search)
    let p = e.search.getGeometry().getFirstCoordinate()
    map.getView().animate({ center: p })
  })

  map.addControl(MySearch)
}

export default MySearch
