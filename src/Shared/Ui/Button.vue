<template>
    <button :class="className">
        <slot />
    </button>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    className: {
        type: String,
        required: false,
    },
})
const { className } = toRefs(props)
</script>
