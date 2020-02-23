<template>
    <div @click="onButtonClicked"
         class="apos-button"
         :class="isFilled ? 'apos-button--filled' : 'apos-button--outlined'">
        <ripple/>
        <a>
            <slot>Default Button !!!!</slot>
        </a>
    </div>
</template>

<script>
    import Ripple from "components/Ripple";
    export default {
        name: "AposButton",
        components: {Ripple},
        data() {
            return {
                ripples: []
            }
        },

        props: {
            isFilled: Boolean
        },

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
        cursor: pointer;
        position: relative;
    }

    .apos-button--outlined {
        color: #027CCB;
    }

    .apos-button--filled {
        background-color: $blue;
        color: $white;
        box-shadow: 0 3px 4px rgba(darken($blue, 17%), 0.23),
        0 3px 4px rgba($blue, 0.18);
    }
</style>
