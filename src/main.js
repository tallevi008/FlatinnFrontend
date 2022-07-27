import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store.js';
import { stayService } from './services/stays-service-local.js';
import './styles/styles.scss';
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

// Element-Plus tal
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
const options = {
  template: ``,
  store: store,
  router: router,
};
const app = createApp(App, options);

app.config.globalProperties.$filters = {
  currencyUSD(amount) {
    return '$' + amount;
  },
};

// Element-Plus tal
app.use(ElementPlus);

app.use(router);
app.use(store);
app.use(VCalendar, {});
app.mount('#app');
