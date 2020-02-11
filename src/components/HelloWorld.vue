<template>
    <div class="helloworld">
        {{msg}}
        <p @click="clickme">点我</p>
        <a href="">helloworld!!!</a>
    </div>
</template>

<style lang="scss" scoped>
    .helloworld{
        p{
            color:red;
        }
    }
    a{
        color:green;
    }

    
</style>

<script>
export default {
    data(){
        return {
            msg:"我是helloworld组件！"
        }
    },
    methods:{
        clickme(){
            alert("被点击了！")
        }
    }
}
</script>

