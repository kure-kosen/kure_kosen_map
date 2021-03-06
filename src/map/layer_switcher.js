import Sortable from 'sortablejs'
import { draggable } from './utils'

import './css/layer_switcher.scss'

draggable('#layer_switcher_header', '#layer_switcher_window')

// Open Window
$('#layer_switcher_button_wrapper').click(() => {
  $('#layer_switcher_window').toggle()
  $('#layer_switcher_window').css({ top: '80px', left: '60px' })
})

$('#layer_switcher_close_button').click(() => {
  $('#layer_switcher_window').hide()
})
// ------------------------------------------------

// Function
const bindSlider = (slider, layer) => {
  slider.on('input change', e => {
    layer.setOpacity(parseFloat(e.target.value))
  })
  slider.val(String(layer.getOpacity()))
}
// end bindSlider ---------------------------------

const bindCheckbox = (checkbox, layer) => {
  checkbox.on('change', e => {
    layer.setVisible(e.target.checked)
  })
  checkbox.prop('checked', layer.getVisible())
}
// end bindCheckbox -------------------------------

const createTr = (layer_group, layer, i) => {
  const $row = $('<tr>').attr('id', 'layer' + i)

  const $td1 = $('<td>')
    .attr('class', 'movable')
    .text(layer_group.values_.title)

  const $td2 = $('<td>')
    .attr('class', 'movable')
    .text(layer.values_.title)

  const $slider = $('<input>', {
    class: 'opacity',
    type: 'range',
    min: '0',
    max: '1',
    step: '0.01'
  })

  const $td3 = $('<td>').append($slider)

  const $td4 = $('<td>')

  const $visible_checkbox = $('<input>', {
    id: 'checkbox_layer' + i,
    class: 'visible',
    type: 'checkbox'
  })

  const $visible_checkbox_label = $('<label>', {
    class: 'fas',
    for: 'checkbox_layer' + i
  })

  $visible_checkbox.appendTo($td4)
  $visible_checkbox_label.appendTo($td4)

  $row.append($td1)
  $row.append($td2)
  $row.append($td3)
  $row.append($td4)

  $('#layer_switcher_table tbody').append($row)

  bindSlider($slider, layer)
  bindCheckbox($visible_checkbox, layer)
}
// end createTr -----------------------------------
// ------------------------------------------------

// Sort
const SortInit = layers => {
  Sortable.create($('#layer_switcher_table tbody').get(0), {
    handle: '.movable',
    animation: 100,
    onUpdate: () => {
      setZIndexOrderByDesc(layers)
    }
  })
  // end Sortable.create --------------------------

  const setZIndexOrderByDesc = layers => {
    const layerJoinZIndex = {}

    const arrayDesc = $('#layer_switcher_table tbody')
      .children()
      .toArray()
      .reverse()

    arrayDesc.forEach((v, i) => {
      let $layer = $(v)
        .children()
        .eq(1)
        .html()
      layerJoinZIndex[$layer] = i
    })

    layers.forEach(layer_group => {
      layer_group.values_.layers.getArray().forEach(layer => {
        Object.keys(layerJoinZIndex).forEach((key, value) => {
          if (layer.values_.title === key) {
            layer.setZIndex(value)
          }
        })
      })
    })
  }
  // end setZIndexOrderByDesc----------------------
}
// ------------------------------------------------

// Main
const MyLayerSwitcher = map => {
  const layers = map.getLayers().getArray()
  layers.forEach(layer_group => {
    layer_group.values_.layers.getArray().forEach((layer, i) => {
      if (layer_group.values_.title == 'Base maps') return // とりあえず
      createTr(layer_group, layer, i)
    })
  })

  SortInit(layers)
}

export default MyLayerSwitcher
