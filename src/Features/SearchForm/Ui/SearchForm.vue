<template>
  <form :class="cl.searchForm" @submit="handleFormSubmit">
    <NormalSearchIcon v-if="width > 375" :class="cl.searchIcon" />
    <Input :className="cl.searchInput" v-model="localSearchValue" :placeholder="'Поиск по 100 000 товаров'"/>
    <div :class="cl.buttonsBlock">
      <InputClearButton  v-show="localSearchValue.length !== 0" v-model="localSearchValue"/>
      <Button
          :class="cl.searchButton"
          v-show="localSearchValue.length !== 0"
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
import {ref, watch} from "vue";
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";
import {useWindowSize} from "@vueuse/core";

const { width } = useWindowSize()
const store = useItemsStore()
const {filterItems} = storeToRefs(store)
const {setSearchQuery} = store

const localSearchValue = ref("");

watch(localSearchValue, ()=>{
    localSearchValue.value.length === 0 && setSearchQuery('')
})

const handleFormSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localSearchValue.value.trim())
}

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
        height: 46px;
        @media (max-width: 375px) {
            max-width: 307px;
            padding: 0 0 6px 0;
            border-radius: 0;
            border: none;
            border-bottom: 1px solid $color-border;
            width: 100%;
            height: 45px;
        }
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
      @media (max-width: 375px) {
          max-width: 140px;
      }
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
      @media (max-width: 375px) {
          right: 0;
      }
  }
</style>