<template>
  <div class="flex-justify-between">
    <div v-for="row in rows">{{data[row.prop]}}</div>
  </div>
  <div class="setence">
    <span>{{discription?.label}}：</span>
    <span>
      {{data[discription?.prop]}}
    </span>
  </div>
  <div class="setence">
    <span>{{mainSkill?.label}}：</span>
    <span>{{data[mainSkill?.prop]?.join('、')}}</span>
  </div>
  <div class="setence" v-for="mainJobs in data.mainJobs" :key="mainJobs.label">
    <span>{{mainJobs.label}}：</span>
    <p class="des" v-for="des in mainJobs.descrip" :key="des">{{des}}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  data: {
    type: Object,
    default: () => {}
  },
  computed: {
    rows () {
      return options.filter(item => item.tip === 'row')
    },
    discription () {
      console.log('options', options)
      return options.filter(item => item.tip === 'discription')[0] || {}
    },
    mainSkill () {
      return options.filter(item => item.tip === 'mainSkill')[0] || {}
    }
  }
})
</script>

<style lang="scss" scoped>
.des {
  padding-left: 15px;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    width: 8px;
    height: 8px;
    background-color: var(--color-text);
    transform: rotate(45deg);
  }
}
</style>