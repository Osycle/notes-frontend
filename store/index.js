import { getUser } from "~/api/userApi";


export const state = () => ({
  user: null,
  globalLoading: true,
});


export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
}


export const actions = {
  setUser({ commit }, payload) {
    commit("SET_USER", payload);
  },
	async nuxtServerInit({ dispatch }, { app, $axios }) {
		// const user = await getUser($axios);
	}
}

