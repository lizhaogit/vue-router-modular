import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

var r = require.context('../components', true, /\.routes\.js/)

var arr = []

r.keys().forEach((key) => {
    arr = arr.concat(r(key).default);
});

// 修改


export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        ...arr
    ]
})