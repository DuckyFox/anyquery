<template>
  <div :class="cl.header">
    <div v-if="width > 375" :class="cl.shell">
        <div  :class="cl.logo" @click="()=>console.log(width)">
          <LogoIcon/>
          <h5>Логотип</h5>
        </div>
        <CatalogLink />
    </div>
    <BackArrowIcon :class="cl.backArrowIcon" v-if="width <= 375"/>
    <SearchForm/>
    <HeaderNav v-if="width > 375"/>
  </div>
</template>

<script setup>
import LogoIcon from '@/Shared/Assets/Icons/logoIcon.svg'
import CatalogLink from "@/Features/CatalogLink/Ui/CatalogLink.vue";
import SearchForm from "@Features/SearchForm/Ui/SearchForm.vue";
import HeaderNav from "@Entities/HeaderNav/Ui/HeaderNav.vue";
import { useWindowSize } from '@vueuse/core'
import BackArrowIcon from '@Shared/Assets/Icons/backArrowIcon.svg'
import {computed} from "vue";
const { width } = useWindowSize()


</script>

<style module="cl" lang="scss">
    .header{
        font-family: Inter, sans-serif;
        margin: 0 auto;
        display: flex;
        max-width: 1720px;
        width: 100%;
        gap: 24px;
        align-items: center;
        @media (max-width: 1440px) {
            max-width: 1184px;
        }
        @media (max-width: 375px) {
            max-width: 343px;
            gap: 0;
            justify-content: space-between;
            align-items: flex-start;
        }
    }

  .shell{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 257px;
    width: 100%;
  }

  .backArrowIcon{
      margin-top: 12px;
      opacity: 30%;
      cursor: pointer;
      transition: opacity 0.1s ease;
  }

    .backArrowIcon:hover{
        opacity: 100%;

    }

  .logo{
    display: flex;
    max-width: 145px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .logoTitle{
    font-size: 16px;
    line-height: normal;
    font-weight: 400;
    color: #000000
  }
</style>