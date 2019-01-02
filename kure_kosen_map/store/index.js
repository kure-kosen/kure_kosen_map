export const strict = false;

export const state = () => ({
  map: null,
  mapLayerIds: [],
  mapCreatedFlag: false
});

export const mutations = {
  setMap: (state, payload) => {
    state.map = payload;
    state.mapCreatedFlag = true;
  },
  addLayer: (state, payload) => {
    if (!state.mapCreatedFlag) return;

    const { id, layer } = payload;

    state.map
      .getLayers()
      .getArray()
      .push(layer);

    state.mapLayerIds.push(id);
    state.map.render();
  },
  resetLayer: state => {
    state.map.getLayers().getArray().length = 0;
    state.map.render();
  }
};
