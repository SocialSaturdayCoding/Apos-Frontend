<template>
    <div class="ripple-container" @click="ripple">
        <transition-group name="ripple"
                          @before-enter="beforeAnimation" @after-enter="afterAnimation">
            <div v-for="r in activeRipples" :key="r" class="ripple-elem"/>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "Ripple",

        data() {return {
            activeRipples: [],
            mouseX: 0,
            mouseY: 0
        }},

        methods: {
            beforeAnimation(el) {
                let dimensions = this.$el.getBoundingClientRect()
                let size = Math.max(dimensions.width, dimensions.height)

                el.style.width = el.style.height = size + "px"
                el.style.top = this.mouseY - dimensions.y - size / 2 + "px"
                el.style.left = this.mouseX - dimensions.x - size / 2 + "px"
            },

            afterAnimation() {
                this.activeRipples.shift()
            },

            ripple(event) {
                this.mouseX = event.clientX
                this.mouseY = event.clientY
                this.activeRipples.push(Math.random().toString())
            }
        }
    }
</script>

<style scoped lang="scss">
    .ripple-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;

        .ripple-elem {
            position: absolute;
            display: block;
            border-radius: 100%;
            background: white;
        }

        .ripple-enter-active {
            transform: scale(2);
            opacity: 0;
            transition: all .8s;
        }

        .ripple-enter {
            opacity: 0.6;
            transform: scale(0);
        }

        .ripple-leave {
            opacity: 0;
        }
    }
</style>
