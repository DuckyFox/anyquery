<template>
    <section :class="cl.itemsGrid">
        <ItemCard v-for="item in filteredItems" :key="item.id" :item="item"/>
        <h3 v-show="filteredItems.length === 0">
            Упс! По Вашему запросу ничего не найдено
        </h3>
    </section>
</template>

<script setup>
import {ItemCard} from "@Widgets/ItemCard/index.js";
import {computed} from "vue";
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";

const store = useItemsStore()
const {filteredItems} = storeToRefs(store)

</script>

<style lang="scss" module="cl">
    .itemsGrid{
        max-width: 1404px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;

        @media (max-width: 1440px) {
            max-width: 924px;
        }

        @media (max-width: 375px) {
            grid-template-columns: repeat(2, 1fr);
            max-width: 343px;
            gap: 16px;
        }
    }
</style>