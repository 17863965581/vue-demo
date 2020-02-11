<template>
    <div class="mine">
        <button @click="clickme">mine</button>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
    export default{
        methods:{
            clickme(){
                let flag = confirm("确定进入首页吗？")
                if(flag){
                    //直接跳转 编程式导航
                    this.$router.push("/home")
                }
            }
        }
    }
</script>  