<template>
  <MobileNavigationVue v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexibles'
import MobileNavigationVue from './mobile/index.vue'
import { getCategoryList } from '@/api/category'
import { ref } from 'vue'
// 11
const categorys = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategoryList()
  categorys.value = categorys
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
