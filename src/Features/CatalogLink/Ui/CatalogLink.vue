<template>
  <a :class="cl.link" href="#">
    Каталог
  </a>
</template>

<script setup>
import Button from "@/Shared/Ui/Button.vue";
</script>

<style module="cl" lang="scss">
  .link{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000000;
    border: 1px solid #73AFF4;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    line-height: normal;
    font-weight: 500;
    max-width: 104px;
    width: 100%;
    min-height: 46px;
  }

  .link:hover{
    color: $color-white;
    background-color: $color-brand;
  }
</style>