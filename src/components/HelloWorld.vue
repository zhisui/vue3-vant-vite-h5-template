<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} </h1>
    <div class="test">test</div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;

  .test {}



}


::v-deep(.table) {}


@media (min-width: 1024px) {}
</style>
