<template>
    <div :class="cl.filters">
        <CategoryFilter/>
        <PriceFilter/>
        <BrandFilter/>
        <SizeFilter/>
    </div>
</template>

<script setup>
import {CategoryFilter} from "@Features/CategoryFilter/index.js";
import {PriceFilter} from "@Features/PriceFilter/index.js";
import {BrandFilter} from "@Features/BrandFilter/index.js";
import {SizeFilter} from "@Features/SizeFilter/index.js";
</script>

<style lang="scss" module="cl">
    .filters{
        max-width: 280px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 28px;
    }
</style>