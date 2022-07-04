import { createApp } from 'vue';
import App from './App.vue';

// md样式支持
import '~/style/markdown.less';
// 引入windicss
import 'virtual:windi.css';

createApp(App).mount('#app');
