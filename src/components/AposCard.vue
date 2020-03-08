<!--
    @author JanGut
    @date 2020-03-08
-->
<template>
    <div class="apos-card">
        <h3 class="apos-card-title">{{ this.CardTitle }}</h3>
        <div class="apos-card-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AposCard",

        props: {
            CardTitle: String
        },
    }
</script>

<style scoped lang="scss">
    @import "src/colors.scss";

    .apos-card {
        padding: 1em;
        border-radius: 4px;
        box-shadow: rgba(1, 78, 128, 0.1) 0px 2px 8px 0px, rgba(2, 124, 203, 0.1) 0px 15px 16px 0px;
    }

</style>