import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const browserLanguage = navigator.language.split('-', 1)[0];
console.info('Detected browser language: ' + browserLanguage);

export default new VueI18n({
	locale: browserLanguage,
	fallbackLocale: 'en',
	messages: {
		en: {
			loaded_at: 'loaded at',
			please_insert: 'Please insert',
			commands: 'Commands',
			line: {
				title: 'Line',
				width: 'Width',
				cap: 'Cap',
				join: 'Join'
			},
			viewport: {
				title: 'Viewport',
				size: 'Size',
				offset: 'Offset'
			}
		},
		de: {
			loaded_at: 'geladen am',
			please_insert: 'Bitte eingeben',
			commands: 'Befehle',
			line: {
				title: 'Linie',
				width: 'Breite',
				cap: 'Ende',
				join: 'Verb.'
			},
			viewport: {
				title: 'Ansicht',
				size: 'Größe',
				offset: 'Absatz'
			}
		}
	}
});

// For more: <https://kazupon.github.io/vue-i18n/started.html#html>
