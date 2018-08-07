export const toNorth = map => {
  $('#north_button').on('click', () => {
    map.getView().setRotation(0)
  })
}

export const searchAdjustment = () => {
  const mysearch = $('div.mysearch')
  mysearch.removeClass('ol-control ol-collapsed ol-search ol-unselectable')
  $('<input>')
    .attr({ type: 'reset', id: 'reset' })
    .val('×')
    .appendTo(mysearch)

  $('#reset').click(function() {
    $('input.search').val('')
    $('ul.autocomplete').addClass('history')
  })
}

export const draggable = (mouseTargetId, windowTargetId) => {
  let wx = 0
  let wy = 0

  $(mouseTargetId).mousedown(e => {
    let mx = e.pageX
    let my = e.pageY
    $(document)
      .on('mousemove.draggableWindow', e => {
        wx += e.pageX - mx
        wy += e.pageY - my

        $(windowTargetId).css({ top: wy, left: wx })

        mx = e.pageX
        my = e.pageY
        return false
      })
      .one('mouseup', () => {
        $(document).off('mousemove.draggableWindow')
      })
    return false
  })
}
