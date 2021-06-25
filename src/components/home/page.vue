<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <router-view></router-view>
    </div>
</template>
<script>
    import HeaderComponent from '../sub-component/header.vue'
    export default {
        name: 'HomePage',
        components: {
            HeaderComponent
        }
    }
</script>
<style scoped>

</style>
