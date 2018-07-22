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

const createTr = (layer, i) => {
  // <tr>
  //   <td class="layer-id">id</td> ===== $td1
  //   <td>type</td> ==================== $td2
  //   <td>group</td> =================== $td3
  //   <td>category</td> ================ $td4
  //   <td>レイヤー名</td> ============== $td5
  //   <td>透明度</td> ================== $td6
  //   <td>表示/非表示</td> ============= $td7
  // </tr>
  const $row = $('<tr>').attr('id', 'layer' + i)

  const $td1 = $('<td>')
    .attr('class', 'layer-id')
    .text(layer.getProperties().id)

  const $td2 = $('<td>')
    .attr('class', 'movable')
    .text(layer.getProperties().type)

  const $td3 = $('<td>')
    .attr('class', 'movable')
    .text(layer.getProperties().group)

  const $td4 = $('<td>')
    .attr('class', 'movable')
    .text(layer.getProperties().category)

  const $td5 = $('<td>')
    .attr('class', 'movable')
    .text(layer.getProperties().name)

  const $slider = $('<input>', {
    class: 'opacity',
    type: 'range',
    min: '0',
    max: '1',
    step: '0.01'
  })

  const $td6 = $('<td>').append($slider)

  const $td7 = $('<td>')

  const $visible_checkbox = $('<input>', {
    id: 'checkbox_layer' + i,
    class: 'visible',
    type: 'checkbox'
  })

  const $visible_checkbox_label = $('<label>', {
    class: 'fas',
    for: 'checkbox_layer' + i
  })

  $visible_checkbox.appendTo($td7)
  $visible_checkbox_label.appendTo($td7)

  $row.append($td1)
  $row.append($td2)
  $row.append($td3)
  $row.append($td4)
  $row.append($td5)
  $row.append($td6)
  $row.append($td7)

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

    console.log(arrayDesc)

    arrayDesc.forEach((v, i) => {
      let $layer = $(v)
        .children()
        .eq(0)
        .html()

      layerJoinZIndex[$layer] = i
    })

    layers.forEach(layer => {
      for (let k in layerJoinZIndex) {
        console.log(layer.getProperties().id == k)

        if (layer.getProperties().id == k) layer.setZIndex(layerJoinZIndex[k])
      }
    })
  }
  // end setZIndexOrderByDesc----------------------
}
// ------------------------------------------------

// Main
const MyLayerSwitcher = map => {
  const layers = map.getLayers().getArray()

  layers.forEach((layer, i) => {
    createTr(layer, i)
  })

  SortInit(layers)
}

export default MyLayerSwitcher
