<template>
  <div>
    <div class="flex-justify-between">
      <div class="bold" v-for="item in itemProps" :key="item">
          {{data[item]}}
      </div>
    </div>
    <description01 v-for="des in data.discription" :key="des" :data="des"></description01>
  </div>
</template>

<script setup lang="ts">
import description01 from '@/components/descriptions/description01.vue'
import { computed, ref } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})
const itemProps = ref(['name', 'job', 'ctime'])
</script>

<style lang="scss" scoped>

</style>