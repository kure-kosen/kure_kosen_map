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

    const { layer } = payload;
    state.map.addLayer(layer);
  },
  removeLayer: (state, payload) => {
    if (!state.mapCreatedFlag) return;

    const { layer } = payload;
    state.map.removeLayer(layer);
  }
};
