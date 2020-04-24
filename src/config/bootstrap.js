import Vue from "vue";
import { LayoutPlugin, FormGroupPlugin, FormInputPlugin, FormSelectPlugin, FormSpinbuttonPlugin, SidebarPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(LayoutPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormSelectPlugin);
Vue.use(FormSpinbuttonPlugin);
Vue.use(SidebarPlugin);

// For more:
// * https://bootstrap-vue.js.org/docs#tree-shaking-with-module-bundlers
// * https://bootstrap-vue.js.org/docs/components/