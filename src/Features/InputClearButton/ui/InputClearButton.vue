<template>
  <Button
      @click="handleClick"
      :className="cl.clearButton"
  >
    <InputClearIcon :class="cl.clearIcon"/>
  </Button>
</template>

<script setup>
import { Button } from "@Shared/Ui";
import InputClearIcon from '@/Shared/Assets/Icons/inputClearIcon.svg';

const handleClick = (e) => {
  e.preventDefault();
  searchValue.value = "";
}

const searchValue = defineModel();
</script>

<style module="cl" lang="scss">

.clearButton {
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.clearIcon {
  display: block;
}

.clearIcon path {
  transition: all 0.2s ease;
}

.clearIcon:hover path {
  opacity: 1;
}
</style>