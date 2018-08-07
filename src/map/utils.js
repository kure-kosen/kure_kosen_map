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
