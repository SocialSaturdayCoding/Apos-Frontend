<!--
    @author bluefirex
    @date 2020-01-04
-->
<template>
    <div class="home">
        <apos-input input-hint="Testinput"></apos-input>
        <apos-button @click="onLogout" :is-filled="true">Logout</apos-button>
        <apos-card card-title="FOO">
            <p>
                Taciti. Netus sapien arcu facilisis ornare semper faucibus felis mi, taciti pharetra rhoncus. Viverra blandit nostra curae. Volutpat semper, odio aenean. Tincidunt proin malesuada felis faucibus metus mi purus ullamcorper nisi. Nibh, lacus scelerisque nec, urna nam lacinia nascetur morbi vehicula augue. Gravida urna adipiscing aptent ad vehicula posuere id hac amet. Egestas nulla ac vel penatibus. Odio neque placerat, metus non imperdiet, ornare enim curabitur varius. Conubia curae class dui urna lobortis dis. Quam auctor ve et. Ornare hac congue taciti. Nostra dolor magna. Eros fusce aptent. Nibh adipiscing elit etiam venenatis cum gravida class eni morbi hendrerit. Sit nibh feugiat at, senectus.
            </p>
            <p>
                Suspendisse mus, cras. Odio. Ultrices pulvinar, augue diam per. Metus sodales libero pede et quam. Sodales at dui enim vel sociis imperdiet. Malesuada facilisi, sociis montes cum tempus sapien ipsum nostra at. Cubilia mus id turpis gravida. Congue eget, scelerisque mi. Placerat a, accumsan sit, iaculis velit erat semper. Phasellus ac ve nisl. Cursus senectus, cras, mauris. Natoque cras hymenaeos primis taciti, netus convallis eni, massa nullam. A amet morbi montes justo. Congue nisl et venenatis a, ultricies. Per adipiscing parturient id fermentum metus facilisis suspendisse nec nunc sociis id est nulla.
            </p>
        </apos-card>
    </div>
</template>

<script>
    import AposButton from "components/AposButton";
    import AposInput from "components/AposInput";
    import AposCard from "components/AposCard";
    export default {
        name: 'Home',
	    
	    components: {
            AposButton,
            AposInput,
            AposCard
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
    @import "src/colors";

</style>
