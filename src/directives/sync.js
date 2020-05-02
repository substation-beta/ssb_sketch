import Vue from 'vue';

const changeListeners = {};

Vue.directive('sync', {
	bind: (el, binding, vnode) => {
		el.value = binding.value;
		changeListeners[el] = () => {
			if (el.checkValidity()) {
				vnode.context[binding.expression] = binding.modifiers.number ? parseFloat(el.value) : el.value;
			} else {
				el.value = vnode.context[binding.expression];
			}
		};
		el.addEventListener('change', changeListeners[el]);
	},
	unbind: (el) => {
		el.removeEventListener('change', changeListeners[el]);
		delete changeListeners[el];
	},
	update: (el, binding) => {
		el.value = binding.value;
	}
});
