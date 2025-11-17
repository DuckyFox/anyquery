<template>
    <div>
        <h3>
            Цена
        </h3>
        <div>
            <Input :placeholder="`от ${findMinMaxPrice[0]}`"/>
            <DividerIcon/>
            <Input :placeholder="`от ${findMinMaxPrice[1]}`"/>
        </div>
    </div>
</template>

<script setup>
import {Input} from "@Shared/Ui/index.js";
import DividerIcon from '@Shared/Assets/Icons/dividerIcon.svg'
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";
import {computed} from "vue";
const store = useItemsStore()
const { items } = storeToRefs(store)
const { filterItems } = store

const findMinMaxPrice = computed(() => {
    if (!items.value || items.value.length === 0) {
        return [0, 0];
    }

    const prices = items.value.map(i => i.priceWithDiscount).sort((a, b) => a - b);

    return [prices[0], prices[prices.length - 1]];
})

console.log(findMinMaxPrice[0])
</script>

<style lang="scss" module="cl">

</style>