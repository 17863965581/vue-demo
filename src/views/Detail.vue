<template>
    <div class="detail">
        detail<br/>
        我是id：{{$route.params.id}}
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    created(){
        // console.log(this)
        // console.log(this.$route.params.id)
        // console.log(this.$route.query.title)
        // this.$http.get(url,{
        //     params:{
        //         movieId:this.$route.params.id
        //     }
        // }).then(res=>{
        //     console.log(res)
        // })
    }
}
</script>