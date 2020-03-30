import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import loginIndex from '@/components/Login/loginIndex'
import a from '@/components/Login/a'
import Headerindex from '@/components/Header/index'
import Footerindex from '@/components/footer/index'
import Sou from '@/components/view/Sou'
import New from '@/components/view/New'
import List from '@/components/list/list'
import Pream from '@/components/Pream/Pream'
import Guan from '@/components/view/Guany'
import Reg from '@/components/view/Reg'
import Sewsou from '@/components/view/Sewsou'
import Yp from '@/components/view/Yp'
import YY from '@/components/view/YY'
import PL from '@/components/view/PL'
import Login from '@/components/Login/Login'
import Tab from '@/components/view/Tab'
import Dd from '@/components/view/Dd'
import Paixv from '@/components/view/Paixv'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginIndex',
      component: loginIndex
    },
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '/Headerindex',
      name: 'Headerindex',
      component: Headerindex
    },
    {
      path: '/Footerindex',
      name: 'Footerindex',
      component: Footerindex,
    },
    {
      path: '/Sou',
      name: 'Sou',
      component: Sou,
    },
    {
      path: '/New',
      name: 'New',
      component: New,
    },
    {
      path: '/List',
      name: 'List',
      component: List,
      // children:[
      //   {
      //     path:'/Pream',
      //     name:'Pream',
      //     component: Pream,
      //   }
      // ],
    },
    {
      path: '/Guan',
      name: 'Guan',
      component: Guan,
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg,
    },
    {
      path: '/Sewsou',
      name: 'Sewsou',
      component: Sewsou,
    },
    {
      path: '/Yp',
      name: 'Yp',
      component: Yp,
    },
    {
      path: '/YY',
      name: 'YY',
      component: YY,
    },
    {
      path: '/PL',
      name: 'PL',
      component: PL,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Tab',
      name: 'Tab',
      component: Tab,
    },
    {
      path: '/Dd',
      name: 'Dd',
      component: Dd,
    },
    {
      path: '/Pream',
      name: 'DPreamd',
      component: Pream,
    },
    {
      path: '/Paixv',
      name: 'Paixv',
      component: Paixv,
    },
  ],

})
