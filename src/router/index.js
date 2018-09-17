import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/Home.vue'
import about from '@/page/about/About.vue'
import copy from '@/page/copy/Copy.vue'
import classify from '@/page/classify/Classify.vue'
import list from '@/page/list/List.vue'
import product from '@/page/product/Product.vue'
import articleList from '@/page/articleList/ArticleList.vue'
import articleDetail from '@/page/articleDetail/ArticleDetail.vue'
import register from '@/page/register/Register.vue'
import patent from '@/page/patent/Patent.vue'
import processCom from '@/page/process/Process.vue'
import share from '@/page/share/Share.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      meta:{
        index:0,
        keepAlive:true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: about,
      meta:{index:1}
    },
    {
      path:'/copy',
      name:'Copy',
      component:copy,
      meta:{index:1}
    },
    {
      path:'/classify',
      name:'Classify',
      component:classify,
      meta:{index:1}
    },
    {
      path:'/list',
      name:'List',
      component:list,
      meta:{
        keepAlive: true,
        isBack:false,
        index:1
      }
    },{
      path:'/product/:id',
      name:'Product',
      component:product,
      meta:{index:2}
    },{
      path:'/articleList',
      component:articleList,
      meta:{
        keepAlive: true,
        index:1
      }
    },{
      path:'/articleDetail/:id',
      component:articleDetail,
      meta:{index:2}
    },{
      path:'/register',
      component:register,
      meta:{index:1}
    },{
      path:'/patent',
      component:patent,
      meta:{index:1}
    },{
      path:'/process',
      component:processCom,
      meta:{index:1}
    },{
      path:'/share',
      component:share,
      meta:{index:1}
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
