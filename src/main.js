import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import "./style.css";

// Font Awesome Core
import { library } from "@fortawesome/fontawesome-svg-core";
// Import Font Awesome Icon Component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Font Awesome Icons
import { faMoon, faSun, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faSun, faCirclePlus);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("Datepicker", Datepicker)
  .component("V-Select", vSelect)
  .mount("#app");
