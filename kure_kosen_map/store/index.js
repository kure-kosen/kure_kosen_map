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
    const { id, layer } = payload;

    if (!state.mapCreatedFlag) return;
    if (isExistLayerId(state.mapLayerIds, id)) return;

    state.map.addLayer(layer);
    state.mapLayerIds.push(id);
  },
  removeLayer: (state, payload) => {
    const { id, layer } = payload;

    if (!state.mapCreatedFlag) return;
    if (isExistLayerId(state.mapLayerIds, id)) return;

    state.map.removeLayer(layer);
    const index = state.mapLayerIds.findIndex(id);
    state.mapLayerIds.slice(index, 1);
  }
};

const isExistLayerId = (list, id) => list.includes(id);
