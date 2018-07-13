export const toNorth = map => {
  $('#north_button').on('click', () => {
    map.getView().setRotation(0)
  })
}
