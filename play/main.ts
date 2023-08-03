import { createApp } from 'vue';
import App from './app.vue';
import DIcon from '../packages/components/icon';
import DButton from '@dough-ui/components/button';
import '@dough-ui/theme-chalk/src/index.scss';

const app = createApp(App);
app.use(DIcon);
app.use(DButton);
app.mount('#app');
