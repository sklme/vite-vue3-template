import { createApp } from 'vue';
import App from './App.vue';
import { router } from '~/router/router';

// md样式支持
import '~/style/markdown.less';
// 引入windicss
import 'virtual:windi.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
