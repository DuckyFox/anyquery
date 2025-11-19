<template>
    <div :class="cl.priceFilter">
        <h3 :class="cl.priceFilterTitle">
            Цена
        </h3>
        <form :class="cl.priceFilterForm">
            <div :class="[cl.priceFilterInputShell, isMinActive ? cl.active : '']">
                <p
                    v-show="minPriceValue.length === 0"
                    :class="cl.priceFilterInputFakePh"
                >
                    от
                </p>
                <Input
                    v-model="minPriceValue"
                    @focus="handleMinInputFocus"
                    @blur="handleMinInputBlur"
                    :className="cl.priceFilterInput"
                    :placeholder="`${findMinMaxPrice[0]}`"
                />
            </div>
            <DividerIcon :class="cl.priceFilterDivider"/>
            <div :class="[cl.priceFilterInputShell, isMaxActive ? cl.active : '']">
                <p
                    v-show="maxPriceValue.length === 0"
                    :class="cl.priceFilterInputFakePh"
                >
                    до
                </p>
                <Input
                    v-model="maxPriceValue"
                    @focus="handleMaxInputFocus"
                    @blur="handleMaxInputBlur"
                    :className="cl.priceFilterInput"
                    :placeholder="`${findMinMaxPrice[1]}`"
                />
            </div>
        </form>
    </div>
</template>

<script setup>
import {Input} from "@Shared/Ui/index.js";
import DividerIcon from '@Shared/Assets/Icons/dividerIcon.svg'
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";
import {computed, ref} from "vue";

const store = useItemsStore()
const { items } = storeToRefs(store)
const { filterItems } = store

const minPriceValue = ref('')
const maxPriceValue = ref('')

const isMinActive = ref(false)
const isMaxActive = ref(false)

const findMinMaxPrice = computed(() => {
    if (!items.value || items.value.length === 0) {
        return [0, 0];
    }
    const prices = items.value.map(i => i.priceWithDiscount).sort((a, b) => a - b);
    return [prices[0], prices[prices.length - 1]];
})

const handleMinInputFocus = () => {
    isMinActive.value = true
}

const handleMaxInputFocus = () => {
    isMaxActive.value = true
}

const handleMinInputBlur = () => {
    isMinActive.value = false
}

const handleMaxInputBlur = () => {
    isMaxActive.value = false
}

</script>

<style lang="scss" module="cl">
    .priceFilter{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 16px;
    }

    .priceFilterTitle{
        margin: 0;
        font: $header-filter;
        color: $color-font-main;
    }

    .priceFilterForm{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 16px;
    }

    .priceFilterInputFakePh{
        margin: 0;
        font: $paragraph;
        color: $color-font-second;
    }

    .priceFilterInput{
        font: $main-general;
        width: 100%;
        padding: 0 0 0 6px;
        margin: 0;
        border: none;
        outline: none;
        color: $color-font-main;
    }

    .priceFilterInput::placeholder{
        font: $main-general;
        color: $color-font-main;
    }

    .priceFilterDivider{
        width: 10px;
    }

    .priceFilterInputShell{
        padding: 8px 10px;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid $color-border;
        min-height: 36px;
        display: flex;
        align-items: center;
        max-width: 119px;
        box-sizing: border-box;
        transition: all 0.2s ease;
    }

    .priceFilterInputShell.active{
        border: 1px solid $color-brand;

    }
</style>