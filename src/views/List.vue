<template>
    <div class="list">
        list
        <br />
        <router-link
            v-for = "nav in navs"
            :key="nav.id"
            :to="{name:nav.name}"
            replace
        >{{nav.title}}</router-link>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
    export default {
        data(){
            return {
                navs:[
                    {id:1,title:"国内",name:"gn"},
                    {id:2,title:"国际",name:"gj"}
                ]
            }
        } 
    }
</script>  