import { createApp } from 'vue'
import Antd from 'ant-design-vue';
console.log("Antd", Antd)
import 'ant-design-vue/dist/antd.less';
import router from "./router"
import store from "./store"
//console.log("store", store)
//console.log("router", router)

import App from './App.vue'
import './index.css'

import directiveObj from "./directives"

/* const App = ({
    data:()=>({
        currentRoute: window.location.pathname
    }),

    computed: {
        ViewComponent(){
            const matchingPage = route[this.currentRoute] || '404'
            return require(`./pages/${matchingPage}`).default
        }
    },

    render(h) {
        return h(this.ViewComponent)
    },
    
    created() {
        window.addEventListener('popstate',()=>{
            this.currentRoute = window.location.pathname
        })
    },
}) */
const app = createApp(App)

for(let key in directiveObj){
    app.directive(key,directiveObj[key])
}
app.use(Antd).use(router).use(store).mount('#app')


