<template>
    <button
        class="my-button"
        :class="[`my-button--${size}`, `my-button--${variant}`]"
        @click="onClick"
    >

        <!--
            @slot umcaca main slot
            @type string
        -->
        <slot>
            Test
        </slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

enum SizeEnum {
    SMALL = 'small',
    REGULAR = 'regular',
    LARGE = 'large',
}

/**
 * Component description tralala
 */
@Component({})
export default class MyButton extends Vue {

    /**
     * The size of the button allows only some values
     * allowed options: `small` `regular` `large`
     * @enum select
     */
    @Prop({ default: 'regular' })
    size!: 'small' | 'regular' | 'large';

    @Prop({ default: 'primary' })
    variant!: 'primary' | 'secondary' | 'danger';

    onClick() {
        /**
         * emits `click` event to parent component
         */
        this.$emit('click', `button clicked, size: ${this.size}, variant: ${this.variant}`)
    }

}
</script>

<style scoped>
.my-button {
    padding: 5px 10px;
    margin: 0 5px;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 1rem;
    min-height: 1rem;
}

.my-button--small {
    font-size: 0.8rem;
    padding: 2px 5px;
}

.my-button--regular {
    font-size: 1rem;
    padding: 5px 10px;
}

.my-button--large {
    font-size: 1.2rem;
    padding: 10px 20px;
}

.my-button--primary {
    background: #53b6f9;
    color: #fff;
    border-color: #53b6f9;
}

.my-button--primary:hover {
    background: #326d95;
    border-color: #326d95;
}

.my-button--secondary {
    color: #53b6f9;
    border-color: #53b6f9;
}

.my-button--secondary:hover {
    background: #53b6f9;
    color: #fff;
}

.my-button--danger {
    color: #f56565;
    border-color: #f56565;
}

.my-button--danger:hover {
    background: #f56565;
    color: #fff;
}
</style>
