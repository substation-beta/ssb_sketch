import Vue from 'vue';
import {
	BVConfigPlugin,
	LayoutPlugin,
	IconsPlugin,
	FormGroupPlugin,
	InputGroupPlugin,
	FormTextareaPlugin,
	FormInputPlugin,
	FormSelectPlugin
} from 'bootstrap-vue';
import './bootstrap.scss';

Vue.use(BVConfigPlugin, {
	formControls: { size: 'sm' },
	BInputGroup: { size: 'sm' }
});
Vue.use(LayoutPlugin);
Vue.use(IconsPlugin);
Vue.use(FormGroupPlugin);
Vue.use(InputGroupPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormSelectPlugin);

// For more:
// * https://bootstrap-vue.js.org/docs#tree-shaking-with-module-bundlers
// * https://bootstrap-vue.js.org/docs/components/
// * https://getbootstrap.com/docs/4.4/utilities/spacing/
