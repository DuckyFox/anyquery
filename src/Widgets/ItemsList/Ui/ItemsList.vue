<template>
    <section :class="cl.itemsGrid">
        <ItemCard v-for="item in items" :key="item.id" :item="item"/>
    </section>
</template>

<script setup>
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";
import {ItemCard} from "@Widgets/ItemCard/index.js";
import {computed} from "vue";

const store = useItemsStore()
const { filterItems } = store
const items = filterItems()

</script>

<style lang="scss" module="cl">
    .itemsGrid{
        max-width: 1404px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }
</style>