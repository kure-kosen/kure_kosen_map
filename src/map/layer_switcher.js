import Sortable from 'sortablejs'
import './css/layer_switcher.css'

const layer_switcher_wrapper = $('<div>', {
  id: 'layer_switcher_wrapper'
}).appendTo($('.fullscreenlayer'))

const table = $('<table>', {
  id: 'layer_switcher'
}).appendTo(layer_switcher_wrapper)

const bindSlider = (slider, layer) => {
  slider.on('input change', e => {
    layer.setOpacity(parseFloat(e.target.value))
  })
  slider.val(String(layer.getOpacity()))
}

const bindCheckbox = (visible, layer) => {
  visible.on('change', e => {
    layer.setVisible(e.target.checked)
  })
  visible.prop('checked', layer.getVisible())
}

const MyLayerSwitcher = map => {
  const layers = map.getLayers().getArray()
  layers.forEach(layer_group => {
    layer_group.values_.layers.getArray().forEach((layer, i) => {
      if (layer_group.values_.title == 'Base maps') return // とりあえず
      let row = $('<tr>', {
        id: 'layer' + i
      })

      let td1 = $('<td>', {
        class: 'movable'
      }).text(layer_group.values_.title)
      let td2 = $('<td>', {
        class: 'movable'
      }).text(layer.values_.title)
      let input = $('<input>', {
        class: 'opacity',
        type: 'range',
        min: '0',
        max: '1',
        step: '0.01'
      })
      let td3 = $('<td>').append(input)
      let visible = $('<input>', {
        class: 'visible',
        type: 'checkbox'
      })
      let td4 = $('<td>').append(visible)
      bindSlider(input, layer)
      bindCheckbox(visible, layer)
      row.append(td1)
      row.append(td2)
      row.append(td3)
      row.append(td4)
      table.append(row)
    })
  })
  table.appendTo(layer_switcher)

  Sortable.create(layer_switcher, {
    handle: '.movable',
    animation: 100,
    onUpdate: () => {
      getOrderInBase(layers)
    }
  })

  const getOrderInBase = layers => {
    const array = table
      .children()
      .toArray()
      .reverse()

    let tableObj = {}
    array.forEach((v, i) => {
      let hoge = $(v)
        .children()
        .eq(1)
        .html()
      tableObj[hoge] = i
    })

    layers.forEach(layer_group => {
      layer_group.values_.layers.getArray().forEach(layer => {
        let title = layer.values_.title
        Object.keys(tableObj).forEach(function(key, value) {
          if (title === key) {
            layer.setZIndex(value)
          }
        })
      })
    })
  }
}

export default MyLayerSwitcher
