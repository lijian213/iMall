import Vue from 'vue'
import Mint from 'mint-ui'
import axios from 'axios'
import Router from 'vue-router'
import routerMap from './router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(Mint);
Vue.use(Router);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: 'images/common/loading.gif',
    error:'images/common/404.png',
    attempt: 1
});

Vue.config.devtools = true;
Vue.prototype.$http = axios;

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('content');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const router = new Router({
    history: false,
    mode: 'html5'
});

routerMap(router);

router.start(App, 'body');
