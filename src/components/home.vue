<template>
    <div>
        <h1>Two way data binding</h1>
        enter somethings:<input type="text" v-model="name"/>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    name:'home',
    data()
    {
        return{
            name:'amisha'
        }
    }
}
</script>
<style scoped>

h1{

color:orange;
}

</style>
