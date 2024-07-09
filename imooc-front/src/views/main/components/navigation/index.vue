<template>
  <MobileNavigationVue v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexibles'
import MobileNavigationVue from './mobile/index.vue'
</script>

<style lang="scss" scoped></style>
