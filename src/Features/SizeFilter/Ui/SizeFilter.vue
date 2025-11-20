<template>
    <div :class="cl.sizeFilter">
        <div :class="cl.sizeFilterTop">
            <h3 :class="cl.sizeFilterTitle">
                Размер
            </h3>
        </div>
        <div :class="cl.sizeFilterItems">
            <div :class="cl.sizeFilterItem" v-for="size in allSizes" :key="size.id">
                <label :class="cl.sizeFilterInputShell">
                    <input
                        :class="cl.sizeFilterHiddenCheckbox"
                        type="checkbox"
                        :checked="sizeQuery.includes(size.size)"
                        @change="()=>handleSizeToggle(size.size)"
                    />
                    <span :class="[cl.sizeFilterCustomCheckbox, sizeQuery.includes(size.size) ? cl.checked : '']"></span>
                    <span :class="cl.sizeFilterItemName">{{size.size}}</span>
                </label>
                <h5 :class="cl.sizeFilterItemCount">{{findItemsAmountForSize(size.size)}}</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useItemsStore} from "@Shared/Stores/index.js";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {InputClearButton} from "@Features/InputClearButton/index.js";
import SmallSearchIcon from "@Shared/Assets/Icons/smallSearchIcon.svg";

const store = useItemsStore()
const { filteredItems, allSizes, sizeQuery} = storeToRefs(store)
const { setSizeQuery } = store

const findItemsAmountForSize = (size) => {
    return filteredItems.value.filter((item) => item.size === size).length
}

const handleSizeToggle = (size) => {
    const curSizes = [...sizeQuery.value]
    if (curSizes.includes(size)) {
        const index = curSizes.indexOf(size)
        curSizes.splice(index, 1)
    } else {
        curSizes.push(size)
    }
    setSizeQuery(curSizes)
}

</script>

<style lang="scss" module="cl">
.sizeFilter{
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}

.sizeFilterTop{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.sizeFilterTitle{
    margin: 0;
    color: $color-font-main;
    font: $header-filter;
}

.sizeFilterItems{
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

.sizeFilterItem{
    max-width: 264px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sizeFilterInputShell{
    display: flex;
    column-gap: 12px;
    align-items: center;
}

.sizeFilterHiddenCheckbox{
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
}

.sizeFilterCustomCheckbox{
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

.sizeFilterCustomCheckbox.checked {
    background-color: $color-brand;
    border-color: $color-brand;
}

.sizeFilterCustomCheckbox.checked::after {
    content: '✓';
    display: block;
    color: white;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
}

.sizeFilterCustomCheckbox:hover{
    border: 1px solid $color-brand;
}

.sizeFilterItemName{
    margin: 0;
    color: $color-font-main;
    font: $main-general;
}

.sizeFilterItemCount{
    margin: 0;
    color: $color-font-second;
    font: $paragraph;
}

</style>