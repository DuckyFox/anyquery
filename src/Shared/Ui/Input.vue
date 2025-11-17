<template>
  <input
      :placeholder="placeholder"
      :class="className"
      v-model="searchValue"
  />
</template>

<script setup>
import {toRefs} from "vue";

const props = defineProps({
  placeholder: String,
  className: {
    type: String,
    required: false,
  },
})
const { placeholder, className } = toRefs(props)
const searchValue = defineModel()

</script>
