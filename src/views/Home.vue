<!--
    @author bluefirex
    @date 2020-01-04
-->
<template>
    <div class="home">
        <apos-button @click="onLogout" :is-filled="true">Logout</apos-button>
    </div>
</template>

<script>
    import AposButton from "components/AposButton";
    export default {
        name: 'Home',
	    
	    components: {
            AposButton
	    },
        
        data() {
            return {
            
            }
        },
        
        computed: {
        
        },
        
        methods: {
            onLogout() {
                console.log("Logout")
            }
        }
    }
</script>

<style scoped lang="scss">
    .home {
    
    }
</style>
