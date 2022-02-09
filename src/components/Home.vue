<template>
    <div>
    <h1>home page</h1>
    <p><router-view to="user/1">Amisha</router-view></p>
    <p><router-view to="user/2">Asha</router-view></p>
    <p><router-view to="user/3">nirali</router-view></p>
    <p><router-view to="user/4">arpita</router-view></p>
    </div>
</template>
<script>
export default {
    name:'Home'
}
</script>