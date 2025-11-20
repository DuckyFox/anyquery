<template>
    <section :class="cl.itemsGrid">
        <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
        <h3 v-show="filteredItems.length === 0" :class="cl.noItemsTitle">
            Упс! По Вашему запросу ничего не найдено
        </h3>
    </section>
</template>

<script setup>
import { ItemCard } from '@Widgets/ItemCard/index.js'
import { useItemsStore } from '@Shared/Stores/index.js'
import { storeToRefs } from 'pinia'

const store = useItemsStore()
const { filteredItems } = storeToRefs(store)
</script>

<style lang="scss" module="cl">
.itemsGrid {
    max-width: 1404px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: $breakpoint-desktop) {
        max-width: 924px;
    }

    @media (max-width: $breakpoint-mobile) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 343px;
        gap: 16px;
    }
}

.noItemsTitle {
    margin: 0;
    font: $header-filter;
}
</style>
