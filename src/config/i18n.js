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
			viewportHeight: "Viewport (height)",
			viewportOffsetX: "Offset (horizontal)",
			viewportOffsetY: "Offset (vertical)"
		},
		de: {
			commands: "Befehle",
			viewportHeight: "Ansicht (Höhe)",
			viewportOffsetX: "Verschiebung (horizontal)",
			viewportOffsetY: "Verschiebung (vertikal)"
		}
	}
});

// For more: <https://kazupon.github.io/vue-i18n/started.html#html>