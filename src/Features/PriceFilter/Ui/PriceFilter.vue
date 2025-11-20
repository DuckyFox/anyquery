<template>
    <div :class="cl.priceFilter">
        <h3 :class="cl.priceFilterTitle">
            Цена
        </h3>
        <form :class="cl.priceFilterForm">
            <div :class="[cl.priceFilterInputShell, isMinActive ? cl.active : '']">
                <p
                    v-show="minPriceValue === ''"
                    :class="cl.priceFilterInputFakePh"
                >
                    от
                </p>
                <Input
                    v-model="minPriceValue"
                    @focus="handleMinInputFocus"
                    @blur="handleMinInputBlur"
                    :className="cl.priceFilterInput"
                    :placeholder="`${minMaxPrices.min}`"
                    :type="'number'"
                />
            </div>
            <DividerIcon :class="cl.priceFilterDivider"/>
            <div :class="[cl.priceFilterInputShell, isMaxActive ? cl.active : '']">
                <p
                    v-show="maxPriceValue === ''"
                    :class="cl.priceFilterInputFakePh"
                >
                    до
                </p>
                <Input
                    v-model="maxPriceValue"
                    @focus="handleMaxInputFocus"
                    @blur="handleMaxInputBlur"
                    :className="cl.priceFilterInput"
                    :placeholder="`${minMaxPrices.max}`"
                    :type="'number'"
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
import {computed, onMounted, ref, watch} from "vue";
import {debounce} from "@Shared/Lib/index.js";

const store = useItemsStore()
const { filteredItems } = storeToRefs(store)
const {setPriceQuery} = store

const minPriceValue = ref('')
const maxPriceValue = ref('')

const isMinActive = ref(false)
const isMaxActive = ref(false)

const isMinCorrect = ref(true)
const isMaxCorrect = ref(true)

const minMaxPrices = computed(() => {
    if (!filteredItems.value || filteredItems.value.length === 0) {
        return {
            min: 0,
            max: 100000
        };
    }
    const prices = filteredItems.value.map(i => i.priceWithDiscount).sort((a, b) => a - b);
    return {
        min: prices[0],
        max: prices[prices.length - 1]
    };
})

const validatePriceInput = () => {
    const minStr = minPriceValue.value
    const maxStr = maxPriceValue.value
    if (minStr === '') {
        isMinCorrect.value = true
    } else {
        const numberedMinValue = Number(minStr)
        isMinCorrect.value = !isNaN(numberedMinValue) &&
            numberedMinValue >= 0 &&
            isFinite(numberedMinValue)
    }
    if (maxStr === '') {
        isMaxCorrect.value = true
    } else {
        const numberedMaxValue = Number(maxStr)
        isMaxCorrect.value = !isNaN(numberedMaxValue) &&
            numberedMaxValue >= 0 &&
            isFinite(numberedMaxValue)
    }

    if (isMinCorrect.value && isMaxCorrect.value) {
        const minNum = minStr === '' ? 0 : Number(minStr)
        const maxNum = maxStr === '' ? Infinity : Number(maxStr)
        if (minNum > maxNum) {
            isMinCorrect.value = false
            isMaxCorrect.value = false
        }
    }
}

const handleInputAction = () => {
    validatePriceInput()
    const min = minPriceValue.value === '' ? 0 : Number(minPriceValue.value)
    const max = maxPriceValue.value === '' ? minMaxPrices.value.max : Number(maxPriceValue.value)
    setPriceQuery({ min, max })
    if (isMinCorrect.value && isMaxCorrect.value) {
        setPriceQuery({
            min,
            max
        })
    }
}

const debouncedHandleInputAction = debounce(handleInputAction, 200)

watch([minPriceValue, maxPriceValue], ()=> {
    debouncedHandleInputAction()
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

    .priceFilterInputShell.wrong{
        border: 1px solid darkred;
    }
</style>