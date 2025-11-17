<template>
  <div :class="cl.header">
    <div :class="cl.shell">
    <div :class="cl.logo">
      <LogoIcon/>
      <h5>Логотип</h5>
    </div>
    <CatalogLink/>
    </div>
    <SearchForm/>
    <HeaderNav/>
  </div>
</template>

<script setup>
import LogoIcon from '@/Shared/Assets/Icons/logoIcon.svg'
import CatalogLink from "@/Features/CatalogLink/Ui/CatalogLink.vue";
import SearchForm from "@Features/SearchForm/Ui/SearchForm.vue";
import HeaderNav from "@Entities/HeaderNav/Ui/HeaderNav.vue";
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
  }

  .shell{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 257px;
    width: 100%;
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