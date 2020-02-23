<template>
    <div class="apos-button">
        <a @click="onButtonClicked">
            <slot>Unknown Button !!!!</slot>
        </a>
    </div>
</template>

<script>
    export default {
        name: "AposButton",

        methods: {
            onButtonClicked($event) {
                this.$emit("click")
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/colors";

    .apos-button {
        display: inline-block;
        border-radius: 3px;
        border: 1px $blue solid;
        padding: 8px 16px;
        color: $blue;
        cursor: pointer;
    }
</style>
