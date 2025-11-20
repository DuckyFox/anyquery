<template>
    <div :class="cl.brandFilter">
        <div :class="cl.brandFilterTop">
            <h3 :class="cl.brandFilterTitle">
                Бренд
            </h3>
            <Button @click="()=>handleCleanBrands()" :className="cl.brandFilterClearButton">
                Очистить
            </Button>
        </div>
        <form @submit.prevent :class="[cl.brandFilterSearchForm, searchInputFocus && cl.focus]">
            <SmallSearchIcon/>
            <Input
                v-model="brandSearchQuery"
                :className="cl.brandFilterSearchInput"
                :placeholder="'Поиск'"
                @focus="handleSearchInputFocus"
                @blur="handleSearchInputBlur"
            />
            <InputClearButton v-show="brandSearchQuery.length > 0" v-model="brandSearchQuery"/>
        </form>
        <div :class="cl.brandFilterItems">
            <div :class="cl.brandFilterItem" v-for="brand in brandsToShow" :key="brand.id">
                <label :class="cl.brandFilterInputShell">
                    <input
                        :class="cl.brandFilterHiddenCheckbox"
                        type="checkbox"
                        :checked="brandQuery.includes(brand.brand)"
                        @change="()=>handleBrandToggle(brand.brand)"
                    />
                    <span :class="[cl.brandFilterCustomCheckbox, brandQuery.includes(brand.brand) ? cl.checked : '']"></span>
                    <span :class="cl.brandFilterItemName">{{brand.brand}}</span>
                </label>
                <h5 :class="cl.brandFilterItemCount">{{findItemsAmountForBrand(brand.brand)}}</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Button, Input} from "@Shared/Ui/index.js";
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";
import {computed, ref} from "vue";
import {InputClearButton} from "@Features/InputClearButton/index.js";
import SmallSearchIcon from "@Shared/Assets/Icons/smallSearchIcon.svg";

const store = useItemsStore()
const { filteredItems, allBrands, brandQuery } = storeToRefs(store)
const { setBrandQuery } = store

const brandSearchQuery = ref('')
const searchInputFocus = ref(false)

const brandsToShow = computed(() => {
    return brandSearchQuery.value === ''
        ? allBrands.value
        : allBrands.value.filter((brand) => brand.brand.toLowerCase().includes(brandSearchQuery.value.toLowerCase()))
})

const findItemsAmountForBrand = (brand) => {
    return filteredItems.value.filter((item) => item.brand === brand).length
}

const handleBrandToggle = (brand) => {
    const curBrands = [...brandQuery.value]
    if (curBrands.includes(brand)) {
        const index = curBrands.indexOf(brand)
        curBrands.splice(index, 1)
    } else {
        curBrands.push(brand)
    }
    setBrandQuery(curBrands)
}

const handleSearchInputFocus = () => {
    searchInputFocus.value = true
}

const handleSearchInputBlur = () => {
    searchInputFocus.value = false
}

const handleCleanBrands = () => {
    setBrandQuery([])
}

</script>

<style lang="scss" module="cl">
.brandFilter{
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}

.brandFilterTop{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.brandFilterTitle{
    margin: 0;
    color: $color-font-main;
    font: $header-filter;
}

.brandFilterClearButton{
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    text-decoration: underline;
    color: $color-font-second;
    font: 400 12px/12px PTSans;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.2s ease;
}

.brandFilterClearButton:hover{
    color: $color-font-main;
}

.brandFilterSearchForm{
    padding: 0px 12px;
    box-sizing: border-box;
    border: 1px solid $color-border;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    width: 100%;
    height: 36px;
}

.brandFilterSearchForm.focus{
    border: 1px solid $color-brand;
}

.brandFilterSearchInput{
    box-sizing: border-box;
    padding: 0;
    border: none;
    outline: none;
    margin-left: 8px;
    font: $main-general;
    width: 100%

}

.brandFilterSearchInput::placeholder{
    font: $main-general;
    color: $color-font-second;
}

.brandFilterItems{
    max-height: 180px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    scrollbar-width: thin;
    scrollbar-color: $color-icons transparent;

    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background: $color-icons;
    }
    &::-webkit-scrollbar-thumb {
        background: $color-icons;
        border-radius: 10px;
    }
}

.brandFilterItem{
    max-width: 264px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brandFilterInputShell{
    display: flex;
    column-gap: 12px;
    align-items: center;
}

.brandFilterHiddenCheckbox{
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
}

.brandFilterCustomCheckbox{
    margin: 0;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: transparent;
    border: 1px solid $color-border;
    transition: all 0.2s ease;
    cursor: pointer;
}

.brandFilterCustomCheckbox.checked {
    background-color: $color-brand;
    border-color: $color-brand;
}

.brandFilterCustomCheckbox.checked::after {
    content: '✓';
    display: block;
    color: white;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
}

.brandFilterCustomCheckbox:hover{
    border: 1px solid $color-brand;
}

.brandFilterItemName{
    margin: 0;
    color: $color-font-main;
    font: $main-general;
}

.brandFilterItemCount{
    margin: 0;
    color: $color-font-second;
    font: $paragraph;
}

</style>