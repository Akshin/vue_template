import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import ru from "vuetify/lib/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#343957",
        secondary: "#6b51df",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        bg: "#f8f9fe",
      },
      dark: {
        primary: "#343957",
      },
    },
  },
  lang: {
    locales: { ru },
    current: "ru",
  },
});
