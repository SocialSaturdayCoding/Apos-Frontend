<!--
    @author bluefirex
    @date 2020-01-04
-->
<template>
    <div class="home">
        <apos-input input-hint="Testinput"></apos-input>
        <apos-button @click="onLogout" :is-filled="true">Logout</apos-button>
    </div>
</template>

<script>
    import AposButton from "components/AposButton";
    import AposInput from "components/AposInput";
    export default {
        name: 'Home',
	    
	    components: {
            AposButton,
            AposInput
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
