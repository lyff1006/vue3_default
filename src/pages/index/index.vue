<!--
 * @description: 主页
 * @author: XianPengFei
 * @lastEditors: XianPengFei
 * @Date: 2020-09-09 11:20:31
 * @LastEditTime: 2020-09-09 16:44:07
 * @Copyright: 1.0.0
-->
<template>
    <div>
        <div>index test</div>
        <a-button type="primary" @click="toLogin">to Login</a-button>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:"index",
    computed:{
        ...mapState({})
    },
    methods:{
        toLogin(){
            this.$router.push({path:"/login"})
        }
    }
}
</script>