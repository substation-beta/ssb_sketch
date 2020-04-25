import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const browserLanguage = navigator.language.split("-", 1)[0];
console.info("Detected browser language: " + browserLanguage);

export default new VueI18n({
    locale: browserLanguage,
    fallbackLocale: "en",
    messages: {
        en: {
			commands: "Commands",
			viewportWidth: "Viewport width",
			viewportHeight: "Viewport height"
		},
		de: {
			commands: "Befehle",
			viewportWidth: "Ansicht-Breite",
			viewportHeight: "Ansicht-Höhe"
		}
	}
});

// For more: <https://kazupon.github.io/vue-i18n/started.html#html>