import Vue from "vue";
import Router from "vue-router";

//安装路由
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect:'/node',
            component: () => import('../pages/MainPage'),
            children:[
                {
                    path: '/node',
                    component: () => import('../pages/NodeStatus')
                },
                {
                    path: '/data',
                    component: () => import('../pages/DataStream')
                },
                {
                    path: '/service',
                    component: () => import('../pages/DataService')
                }
            ]
        },
        // {
        //     path: '/hello',
        //     component: () => import('../components/test')
        // },

    ]
})