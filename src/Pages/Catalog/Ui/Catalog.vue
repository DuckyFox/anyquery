<template>
    <Header/>
    <main :class="cl.main">
        <Filters v-if="width > 375"/>
        <ItemsList/>
    </main>
</template>

<script setup>
import Header from "@/Widgets/Header/Ui/Header.vue";
import { ItemsList } from "@Widgets/ItemsList/index.js";
import {Filters} from "@Widgets/Filters/index.js";
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
</script>

<style module="cl" lang="scss">
    .main{
        display: flex;
        margin: 16px auto;
        justify-content: space-between;
        max-width: 1720px;
        width: 100%;
        @media (max-width: 1440px) {
            max-width: 1240px;
        }
        @media (max-width: 375px) {
            max-width: 343px;
        }
    }
</style>