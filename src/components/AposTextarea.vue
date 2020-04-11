<!--
    @author fredericobormann
    @date 2020-02-23
-->
<template>
    <div class="apos-textarea"
         :class="{ 'labeltop': labelOnTop }">
        <label :for="id">{{ inputHint }}</label>
        <textarea :id="id"
               @focus=onFocus
               @blur=onBlur
               @change=onChange
               @keydown=onKeyDown
               @keyup=onKeyUp
               ref="textarea"
               v-model="value">
        </textarea>
    </div>
</template>

<script>
    import Functions from "../lib/Functions";

    export default {
        name: 'AposTextarea',

        data() {
            return {
                active: false,
                filled: false,
                value: ""
            }
        },

        props: {
            inputHint: String,
            minHeight: {
                type: Number,
                default: 0
            },
            id: {
                type: String,
                default: function () {
                    return Functions.generateID("input");
                }
            }
        },

        computed: {
            labelOnTop()
                {return (this.active || this.filled)}
        },

        methods: {
            resize(){
                let textarea = this.$refs.textarea;

                textarea.style.height = 'auto';
                textarea.style.height = Math.max(this.minHeight, textarea.scrollHeight) + 'px';
            },
            onFocus(){
                this.active = true
            },
            onBlur(){
                this.active = false
            },
            onChange(){
                this.filled = !(this.value.length === 0);
                this.resize();
            },
            onKeyDown(){
                this.resize();
            },
            onKeyUp(){
                this.resize();
            }
        },

        mounted() {
            this.resize();
        }
    }
</script>

<style scoped lang="scss">
    @import "src/colors.scss";

    .apos-textarea {
        position: relative;
        display: inline-block;

        textarea {
            position: relative;
            color: $darkgray;
            font-family: "Source Sans Pro", sans-serif;
            border: 1px solid $lightgray;
            border-radius: 4px;
            padding: 8px 16px;
            resize: none;
            overflow: hidden;
            z-index: 1;
        }

        label {
            position: absolute;
            top: 8px;
            left: 16px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            z-index: 2;

            color: $darkgray;
            transition: all 0.2s ease;
        }

        textarea:focus {
            outline: none;
        }
    }

    .apos-textarea.labeltop{
        label {
            top: 0%;
            transform: translateY(-50%);

            background-color: white;
        }
    }
</style>