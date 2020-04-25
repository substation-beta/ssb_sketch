import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
import createPersistedState from "vuex-persistedstate";
import project from "../../package.json";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// Canvas attributes: <https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D>
		commands: "",
		fillColor: "black",
		strokeColor: "grey",
		lineWidth: 2,
		lineCap: "round",
		lineJoin: "round",
		viewportOffsetX: 0,
		viewportOffsetY: 0,
		viewportWidth: 100,
		viewportHeight: 100
	},
	getters: { getField },
	mutations: { updateField },
	plugins: [createPersistedState({ key: project.name + "-store", storage: window.localStorage })]
});

// For more:
// * https://vuex.vuejs.org/api/
// * https://github.com/maoberlehner/vuex-map-fields#store
// * https://github.com/robinvdvleuten/vuex-persistedstate#api