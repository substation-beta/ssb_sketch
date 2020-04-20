// Import modules
import Vue from "vue";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

// Import resources
import "./config/bootstrap";
import store from "./config/store";
import "./main.scss";
import App from "./components/App.vue";

// Mount application
const vueApp = new Vue({
	el: "#app",
	render: (createElement) => createElement(App),
	store
});

// Register service worker
OfflinePluginRuntime.install({
	onUpdateReady: () => OfflinePluginRuntime.applyUpdate()
});