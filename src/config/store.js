import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shape: ""
	},
	getters: { getField },
	mutations: { updateField },
	plugins: [createPersistedState({ storage: window.localStorage })]
});