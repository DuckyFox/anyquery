<template>
    <Header/>
    <main :class="cl.main">
        <Filters/>
        <ItemsList/>
    </main>
</template>

<script setup>
import Header from "@/Widgets/Header/Ui/Header.vue";
import { ItemsList } from "@Widgets/ItemsList/index.js";
import {Filters} from "@Widgets/Filters/index.js";
</script>

<style module="cl" lang="scss">
    .main{
        display: flex;
        margin: 24px auto;
        justify-content: space-between;
        max-width: 1720px;
        width: 100%;
    }
</style>