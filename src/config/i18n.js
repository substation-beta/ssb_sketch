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
			hello: "hello"
		},
		de: {
			hello: "hallo"
		}
	}
});