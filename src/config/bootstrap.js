import Vue from "vue";
import {
	LayoutPlugin,
	IconsPlugin,
	ButtonToolbarPlugin,
	InputGroupPlugin,
	FormInputPlugin,
	FormSelectPlugin
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(LayoutPlugin);
Vue.use(IconsPlugin);
Vue.use(ButtonToolbarPlugin);
Vue.use(InputGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormSelectPlugin);

// For more:
// * https://bootstrap-vue.js.org/docs#tree-shaking-with-module-bundlers
// * https://bootstrap-vue.js.org/docs/components/
// * https://getbootstrap.com/docs/4.4/utilities/spacing/