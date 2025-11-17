<template>
    <div>
        <div :class="cl.topCategory">
            <h4 :class="cl.topCategoryTitle">
                Сборные модели
            </h4>
            <h5 :class="cl.topCategoryAmount">
                {{items.length}}
            </h5>
        </div>
        <div :class="cl.bottomCategory" v-for="category in categories" :key="category.id">
            <h4 :class="cl.bottomCategoryTitle">
                {{category.category}}
            </h4>
            <h5 :class="cl.bottomCategoryAmount">
                {{findItemsAmountForCategory(category.category)}}
            </h5>
        </div>
    </div>
</template>

<script setup>
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";
const store = useItemsStore()
const { items } = storeToRefs(store)
const { filterItems } = store

const findAllCategories = (items) => {
    const categories = []
    const categoriesArray = [...new Set(items.map((item) => item.category))]

    return categoriesArray.map((category, index) => {
        return {
            id: `${index +1}`,
            category
        }
    })
}

const categories = findAllCategories(items.value)
console.log(categories)
const findItemsAmountForCategory = (category) => {
    return items.value.filter((item) => item.category === category).length
}

</script>

<style lang="scss" module="cl">
.topCategory{
    padding: 7px 16px 7px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.bottomCategory{
    padding: 7px 16px 7px 32px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.topCategoryTitle{
    margin: 0;
    color: $color-font-main;
    font: $main-general;
    transition: all 0.2s ease;
}

.topCategoryTitle:hover{
    color: $color-font-hover;
}

.topCategoryAmount{
    margin: 0;
    color: $color-font-second;
    font: $paragraph;
}

.bottomCategoryTitle{
    margin: 0;
    color: $color-font-main;
    font: $main-general;
    transition: all 0.2s ease;
}

.bottomCategoryTitle:hover{
    color: $color-font-hover;
}

.bottomCategoryAmount{
    margin: 0;
    color: $color-font-second;
    font: $paragraph;
}
</style>