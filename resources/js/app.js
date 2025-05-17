import { createApp } from 'vue';
import AppContent from './components/AppContent.vue'; // <-- lowercase 'components'

const app = createApp({});
app.component('example-component', AppContent);
app.mount('#appp');
