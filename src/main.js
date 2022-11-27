import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

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
  .mount("#app");
