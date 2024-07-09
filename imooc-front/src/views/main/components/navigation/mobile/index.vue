<template>
  <div class="">移动端 navigation</div>
</template>

<script setup>
import { getCategoryList } from '@/api/category'
const getCategoryData = async () => {
  const res = await getCategoryList()
  console.log('res', res)
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
