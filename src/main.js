
// import store from './store'
import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
// import BarMain from './components/Bar/BarMain.vue'

import '@fortawesome/fontawesome-free/js/all'

const app = createApp(App);
//const app = createApp(BarMain);

// enable devtools for the demo
app.config.devtools = true;


// create selectable style for dynamic css variables

app.component("v-style", {
  render () { return h("style", {}, this.$slots.default()); }
});

app.use(router).mount('#app')
