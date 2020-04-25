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
		lineWidth: 2,
		lineCap: "round",
		lineJoin: "round",
		viewportHeight: 100,	// Viewport width by screen resolution calculated
		viewportOffsetX: 0,
		viewportOffsetY: 0
	},
	getters: { getField },
	mutations: { updateField },
	plugins: [createPersistedState({ key: project.name + "-store", storage: window.localStorage })]
});

// For more:
// * https://vuex.vuejs.org/api/
// * https://github.com/maoberlehner/vuex-map-fields#store
// * https://github.com/robinvdvleuten/vuex-persistedstate#api