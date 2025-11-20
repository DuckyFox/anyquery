<template>
    <div :class="cl.card">
        <div :class="cl.cardTop">
            <img v-if="item.imageLink !== ''" :src="item.imageLink" :alt="'картинка товара'" />
            <NoImageItemIcon
                v-else
                :class="[
                    cl.cardNoImageIcon,
                    isHovered && cl.hovered,
                    !item.isInStock && cl.notInStock,
                ]"
            />
            <div v-if="item.isBestseller" :class="cl.popularMark">
                <h5 :class="cl.popularMarkTitle">Хит продаж</h5>
                <PopularItemIcon />
            </div>
            <h5 v-if="item.discount > 0" :class="cl.cardDiscount">{{ item.discount }}%</h5>
        </div>
        <div :class="cl.cardBottom">
            <h5 :class="cl.cardBrand">
                {{ item.brand }}
            </h5>
            <h4
                :class="cl.cardName"
                :aria-label="item.title"
                @mouseenter="handleCardMouseEnter"
                @mouseleave="handleCardMouseLeave"
            >
                {{ item.title }}
            </h4>
            <div v-if="item.isInStock" :class="cl.cardInStock">
                <div :class="cl.cardPrices">
                    <h4 :class="cl.cardDiscountPrice">{{ item.priceWithDiscount }} ₽</h4>
                    <h5 v-if="item.discount !== 0" :class="cl.cardPrice">{{ item.fullPrice }} ₽</h5>
                </div>
                <Button :class-name="cl.cardAddToCartButton">Купить</Button>
            </div>
            <Button v-else :class-name="cl.cardNoStockButton">Сообщить о поступлении</Button>
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import NoImageItemIcon from '@Shared/Assets/Icons/noImageItemIcon.svg'
import PopularItemIcon from '@Shared/Assets/Icons/popularItemIcon.svg'
import { Button } from '@Shared/Ui/index.js'

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
})

const isHovered = ref(false)

const handleCardMouseEnter = () => {
    isHovered.value = true
}

const handleCardMouseLeave = () => {
    isHovered.value = false
}

const { item } = toRefs(props)
</script>

<style lang="scss" module="cl">
.card {
    max-width: 333px;
    width: 100%;
    @media (max-width: $breakpoint-desktop) {
        max-width: 213px;
        min-height: 372px;
    }
}

.cardTop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 200px;
    background-color: #f8f8fa;
    cursor: pointer;
}

.cardNoImageIcon {
    cursor: pointer;
    transition: transform 0.2s ease;
}

.cardNoImageIcon.notInStock path {
    opacity: 50%;
}

.cardNoImageIcon.hovered {
    transform: scale(1.28);
}

.popularMark {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 6px 8px;
    background-color: $color-white;
    border-radius: 4px;
}

.popularMarkTitle {
    margin: 0;
    font: $main-general;
    color: $color-font-main;
}

.cardDiscount {
    margin: 0;
    position: absolute;
    bottom: 12px;
    left: 12px;
    color: $color-white;
    background-color: $color-brand;
    padding: 6px 10px;
    border-radius: 4px;
    font: $header-general-AC;
}

.cardBottom {
    margin-top: 16px;
}

.cardBrand {
    margin: 0;
    color: $color-font-second;
    font: $main-general;
}

.cardName {
    margin: 8px 0 0 0;
    color: $color-font-main;
    font: $main-general;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    min-height: 32px;
    transition: color 0.2s ease;
    cursor: pointer;
    @media (max-width: $breakpoint-desktop) {
        min-height: 48px;
    }
    @media (max-width: $breakpoint-mobile) {
        -webkit-line-clamp: 3;
    }
}

.cardName:hover {
    color: $color-brand;
}

.cardInStock {
    margin-top: 8px;
}

.cardPrices {
    display: flex;
    gap: 8px;
    align-items: flex-start;
}

.cardPrice {
    margin: 0;
    color: $color-font-second;
    font: 400 12px/14px PTSans;
    text-decoration: line-through;
}

.cardDiscountPrice {
    margin: 0;
    color: $color-font-main;
    font: $header-mobile-AC;
}

.cardAddToCartButton {
    margin-top: 16px;
    max-width: 75px;
    width: 100%;
    min-height: 36px;
    outline: none;
    background-color: transparent;
    border: 1px solid $color-brand;
    color: $color-brand;
    border-radius: 4px;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        color 0.2s ease;
}

.cardAddToCartButton:hover {
    background-color: $color-brand;
    color: $color-white;
}

.cardNoStockButton {
    margin-top: 62px;
    width: 100%;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid $color-font-second;
    color: $color-font-second;
    min-height: 36px;
    font: $header-general-AC;
    cursor: pointer;

    @media (max-width: $breakpoint-desktop) {
        margin-top: 40px;
    }
}
</style>
