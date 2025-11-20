<template>
    <Header />
    <main :class="cl.main">
        <Filters v-if="width > BREAKPOINTS.MOBILE" />
        <ItemsList />
    </main>
</template>

<script setup>
import { Header } from '@Widgets/Header/index.js'
import { ItemsList } from '@Widgets/ItemsList/index.js'
import { Filters } from '@Widgets/Filters/index.js'
import { useWindowSize } from '@vueuse/core'
import { BREAKPOINTS } from '@Shared/Constants/index.js'

const { width } = useWindowSize()
</script>

<style module="cl" lang="scss">
.main {
    display: flex;
    margin: 16px auto;
    justify-content: space-between;
    max-width: 1720px;
    width: 100%;
    @media (max-width: $breakpoint-desktop) {
        max-width: 1240px;
    }
    @media (max-width: $breakpoint-mobile) {
        max-width: 343px;
    }
}
</style>
