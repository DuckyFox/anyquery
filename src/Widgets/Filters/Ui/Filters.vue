<template>
    <div :class="cl.filters">
        <CategoryFilter/>
        <PriceFilter/>
    </div>
</template>

<script setup>
import {CategoryFilter} from "@Features/CategoryFilter/index.js";
import {PriceFilter} from "@Features/PriceFilter/index.js";
</script>

<style lang="scss" module="cl">
    .filters{
        max-width: 280px;
        width: 100%;
    }
</style>