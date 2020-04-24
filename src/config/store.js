import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
import createPersistedState from "vuex-persistedstate";
import project from "../../package.json";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		commands: ""
	},
	getters: { getField },
	mutations: { updateField },
	plugins: [createPersistedState({ key: project.name + "-store", storage: window.localStorage })]
});

// For more:
// * https://vuex.vuejs.org/api/
// * https://github.com/maoberlehner/vuex-map-fields#store
// * https://github.com/robinvdvleuten/vuex-persistedstate#api