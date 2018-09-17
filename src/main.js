// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import fastClick from 'fastclick'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'
import VuePreview from 'vue2-preview'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VuePreview)
Vue.use(layer)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//百度统计代码
router.afterEach( ( to, from, next ) => {
    setTimeout(()=>{
            var _hmt = _hmt || [];
            (function() {
                //每次执行前，先移除上次插入的代码
                document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?xxxx";
                hm.id = "baidu_tj"
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
    },0);
} );
