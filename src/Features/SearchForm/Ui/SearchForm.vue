<template>
    <form :class="[cl.searchForm, searchInputFocus && cl.focus]" @submit="handleFormSubmit">
        <NormalSearchIcon v-if="width > BREAKPOINTS.MOBILE" :class="cl.searchIcon" />
        <Input
            v-model="localSearchValue"
            :class-name="cl.searchInput"
            :placeholder="'Поиск по 100 000 товаров'"
            @focus="handleInputFocus"
            @blur="handleInputBlur"
        />
        <div :class="cl.buttonsBlock">
            <InputClearButton v-show="localSearchValue.length !== 0" v-model="localSearchValue" />
            <Button v-show="localSearchValue.length !== 0" :class="cl.searchButton">
                <h4>Найти</h4>
            </Button>
        </div>
    </form>
</template>

<script setup>
import { Input, Button } from '@Shared/Ui/index.js'
import NormalSearchIcon from '@/Shared/Assets/Icons/normalSearchIcon.svg'
import { InputClearButton } from '@Features/InputClearButton/index.js'
import { ref, watch } from 'vue'
import { useItemsStore } from '@Shared/Stores/index.js'
import { useWindowSize } from '@vueuse/core'
import { BREAKPOINTS } from '@Shared/Constants/index.js'

const { width } = useWindowSize()
const store = useItemsStore()
const { setSearchQuery } = store

const localSearchValue = ref('')

const searchInputFocus = ref(false)

watch(localSearchValue, () => {
    localSearchValue.value.length === 0 && setSearchQuery('')
})

const handleFormSubmit = e => {
    e.preventDefault()
    setSearchQuery(localSearchValue.value.trim())
}

const handleInputFocus = () => {
    searchInputFocus.value = true
}

const handleInputBlur = () => {
    searchInputFocus.value = false
}
</script>

<style module="cl" lang="scss">
.searchForm {
    box-sizing: border-box;
    position: relative;
    border: 1px solid $color-border;
    border-radius: 10px;
    display: flex;
    align-items: center;
    max-width: 1015px;
    width: 100%;
    height: 48px;
    @media (max-width: $breakpoint-mobile) {
        max-width: 307px;
        padding: 0 0 6px 0;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid $color-border;
        width: 100%;
        height: 45px;
    }
}

.searchForm.focus {
    border: 1px solid #73aff4;
}

.searchInput {
    background-color: transparent;
    outline: none;
    border: none;
    max-width: 840px;
    width: 100%;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    @media (max-width: $breakpoint-mobile) {
        max-width: 140px;
    }
}

.searchInput::placeholder {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
}

.searchIcon {
    margin-left: 16px;
    margin-right: 8px;
}

.searchButton {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 70px;
    width: 100%;
    max-height: 38px;
    border: 1px solid #73aff4;
    background-color: #73aff4;
    color: $color-white;
    cursor: pointer;
    transition:
        color 0.3s ease,
        background-color 0.3s ease;
    border-radius: 4px;
}

.searchButton:hover {
    color: #73aff4;
    background-color: $color-white;
}

.buttonsBlock {
    display: flex;
    max-width: 102px;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    right: 16px;
    @media (max-width: $breakpoint-mobile) {
        right: 0;
    }
}
</style>
