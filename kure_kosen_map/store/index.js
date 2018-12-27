export const strict = false;

export const state = () => ({
  map: null,
  mapCreatedFlag: false
});

export const mutations = {
  setMap: (state, payload) => {
    state.map = payload;
    state.mapCreatedFlag = true;
  }
};
