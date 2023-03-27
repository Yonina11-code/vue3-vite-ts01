<template>
  <div class="flex-justify-between">
    <div v-for="row in options.rows">{{data[row.prop]}}</div>
  </div>
  <div class="setence">
    <span>{{options.discription.name}}：</span>
    <span>
      {{data[options.discription.prop]}}
    </span>
  </div>
  <div class="setence">
    <span>{{options.mainSkill.name}}：</span>
    <span>{{data[options.mainSkill.prop].join('、')}}</span>
  </div>
  <div class="setence" v-for="mainJobs in data.mainJobs" :key="mainJobs.name">
    <span>{{mainJobs.name}}：</span>
    <p class="des" v-for="des in mainJobs.descrip" :key="des">{{des}}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  },
  data: {
    type: Object,
    default: () => {}
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