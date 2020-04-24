// Import modules
import Vue from "vue";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

// Import resources
import "./config/bootstrap";
import store from "./config/store";
import i18n from "./config/i18n";
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
	onUpdateReady: () => OfflinePluginRuntime.applyUpdate()
});