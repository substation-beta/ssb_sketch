// Import modules
import Vue from "vue";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

// Import plugins
import "./plugins/uid";
import "./plugins/bootstrap";
import store from "./plugins/store";
import i18n from "./plugins/i18n";

// Import resources
import "./main.scss";
import App from "./components/App.vue";

// Mount application
const vueApp = new Vue({
	el: "#app",
	render: (createElement) => createElement(App),
	store,
	i18n
});

// Register service worker
OfflinePluginRuntime.install({
	// Automatic update: <https://github.com/NekR/offline-plugin/blob/master/docs/updates.md>
	onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
	onUpdated: () => window.location.reload(),
});