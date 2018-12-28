export const strict = false;

export const state = () => ({
  map: null,
  mapCreatedFlag: false
});

export const mutations = {
  setMap: (state, payload) => {
    state.map = payload;
    state.mapCreatedFlag = true;
  },
  addLayer: (state, layer) => {
    if (!state.mapCreatedFlag) return;

    state.map
      .getLayers()
      .getArray()
      .push(layer);

    state.map.render();
  }
};
