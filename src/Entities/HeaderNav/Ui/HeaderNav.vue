<template>
    <nav :class="cl.nav">
        <a :class="cl.link" href="/about">Информация о компании</a>
        <a :class="cl.link" href="/contact">Контакты</a>
        <a :class="cl.link" href="/anotherlinks">Полезные ссылки</a>
    </nav>
</template>

<script setup></script>

<style module="cl" lang="scss">
.nav {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;
}
.link {
    text-decoration: none;
    color: #393939;
    transition: color 0.3s ease;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
}
.link:hover {
    color: $color-font-hover;
}
</style>
