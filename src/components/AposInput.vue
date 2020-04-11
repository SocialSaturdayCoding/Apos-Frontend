<!--
    @author fredericobormann
    @date 2020-02-23
-->
<template>
    <div class="apos-input"
         :class="{ 'labeltop': labelOnTop }">
        <label :for="id">{{ inputHint }}</label>
        <input :id="id"
               @focus=onFocus
               @blur=onBlur
               @change=onChange
               v-model="value">
    </div>
</template>

<script>
    import Functions from "../lib/Functions";

    export default {
        name: 'AposInput',
        
        data() {
            return {
                active: false,
                filled: false,
                value: ""
            }
        },

        props: {
            inputHint: String,
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
            onFocus(){
                this.active = true
            },
            onBlur(){
                this.active = false
            },
            onChange(){
                this.filled = !(this.value.length === 0)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/colors.scss";

    .apos-input {
        position: relative;
        display: inline-block;

        input {
            position: relative;
            color: $darkgray;
		    border: 1px solid $lightgray;
            border-radius: 4px;
            padding: 8px 16px;
            z-index: 1;
        }

        label {
            position: absolute;
            top: 50%;
            left: 16px;
            max-width: 80%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            
            z-index: 2;
            transform: translateY(-50%);

            color: $darkgray;
            transition: all 0.2s ease;
        }

        input:focus {
            outline: none;
        }
    }
    
    .apos-input.labeltop{
        label {
            top: 0%;
            transform: translateY(-50%);

            background-color: white;
        }
    }
</style>