import Vue from "vue";
import Router from "vue-router";

//安装路由
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
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
            ]
        },
        // {
        //     path: '/data',
        //     component: () => import('../pages/DataStream')
        // },

    ]
})