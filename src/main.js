import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGraduationCap, faMobile, faLocationPin, faPaperPlane , faSchoolFlag } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGithub, faLinkedin, faEnvelope, faGraduationCap, faLocationPin, faMobile, faPaperPlane, faSchoolFlag)

// import global css
import '../src/assets/styles.css'
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
