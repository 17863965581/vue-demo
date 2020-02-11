<template>
    <div class="home">
        home
        <ul>
            <li><router-link to="/detail/1?title=详情页一">详情页一</router-link></li>
        </ul>
        <ul>
            <!-- <li><router-link :to="{name:'detail',params:{id:2},query:{title:'详情页二'}}">详情页二</router-link></li> -->
            <li><router-link to="/detail/2?title=详情页二">详情页二</router-link></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

</script>  