<template>
    <input v-model="searchValue" :placeholder="placeholder" :class="className" :type="type" />
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    placeholder: String,
    className: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
})
const { placeholder, className } = toRefs(props)
const searchValue = defineModel({
    type: String,
    default: '',
})
</script>
