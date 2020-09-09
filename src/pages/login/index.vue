<!--
 * @description: 登录页
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:20:31
 * @LastEditTime: 2020-09-09 16:44:22
 * @Copyright: 1.0.0
-->
<template>
    <div class="page-login">
        <div>login test</div>
        <div class="list">
            <a-button type="primary" @click="toIndex">to Index</a-button>
            <a-button type="default" v-if="!currentUser.id" v-debounce="[login,`click`,300]">login</a-button>
            <a-button type="default" v-else v-debounce="[logout,`click`,300]">logout</a-button>
        </div>
        <a-input placeholder="Basic usage"/>
        <div>用户id:{{currentUser.id}}</div>
        <div>用户名:{{currentUser.name}}</div>
    </div>
</template>

<script>
import {useStore,mapActions,mapMutations,mapGetters} from "vuex"
import { computed } from 'vue'
export default {
    name:"login",
    setup(){
        const store = useStore()
        const currentUser = computed(() => store.state.user.currentUser)
        return{
            currentUser
        }
    },
    mounted(){
        console.log(this.currentUser)
        console.log(this.getCurrentUser())
    },
    methods:{
        ...mapActions(["updateCurrentUser"]),
        ...mapMutations(["setCurrentUser"]),
        ...mapGetters(["getCurrentUser"]),

        /**
         * @description: 跳转到index
         * @Date: 2020-09-09 13:36:38
         * @author: XianPengFei
         * @param {type} 
         * @return {type} 
         */
        toIndex(){
            this.$router.push({path:"/index"})
        },

        /**
         * @description: 登录
         * @Date: 2020-09-09 13:37:05
         * @author: XianPengFei
         * @param {type} 
         * @return {type} 
         */
        login(){
            console.log("login")
            this.setCurrentUser({
                id:"123456",
                name:"admin"
            })
        },

        logout(){
            console.log("logout")
            this.setCurrentUser({})
        }
    }
}
</script>
<style lang="less" scoped>
.page-login{
    color:@primary-color;
    &list{
        display: flex;
        
    }
}
</style>