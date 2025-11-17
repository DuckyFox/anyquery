<template>
  <form :class="cl.searchForm">
    <NormalSearchIcon :class="cl.searchIcon" />
    <Input :className="cl.searchInput" v-model="searchValue" :placeholder="'Поиск по 100 000 товаров'"/>
    <div :class="cl.buttonsBlock">
      <InputClearButton v-show="searchValue.length !== 0" v-model="searchValue"/>
      <Button
          :class="cl.searchButton"
          v-show="searchValue.length !== 0"
      >
        <h4>
          Найти
        </h4>
      </Button>
    </div>
  </form>
</template>

<script setup>
import Input from '@/Shared/Ui/Input.vue'
import Button from "@/Shared/Ui/Button.vue";
import NormalSearchIcon from '@/Shared/Assets/Icons/normalSearchIcon.svg';
import {InputClearButton} from "@Features/InputClearButton/index.js";
import {ref} from "vue";

const searchValue = ref("");

</script>

<style module="cl" lang="scss">
  .searchForm{
    position: relative;
    border: 1px solid #73AFF4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    max-width: 1015px;
    width: 100%;
    min-height: 46px;
  }

  .searchInput {
    background-color: transparent;
    outline: none;
    border: none;
    max-width: 840px;
    width: 100%;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  .searchInput::placeholder {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

  .searchIcon{
    margin-left: 16px;
    margin-right: 8px;
  }

  .searchButton{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 70px;
    width: 100%;
    max-height: 38px;
    border: 1px solid #73AFF4;
    background-color: #73AFF4;
    color: $color-white;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
  }

  .searchButton:hover{
    color: #73AFF4;
    background-color: $color-white;
  }

  .buttonsBlock{
    display: flex;
    max-width: 102px;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    right: 16px;
  }
</style>