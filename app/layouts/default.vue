<template>
    <div class="site-shell">
        <slot />
    </div>
</template>

<style scoped>
.site-shell {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
}
</style>
