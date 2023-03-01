
<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import { homeApi } from '@/api';
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
onMounted(() => {
  console.log('执行没有')
  getTreatmentStatus()
})

const getTreatmentStatus = async () => {
  const res = await homeApi.getTreatmentStatus()
  console.log(res,'res')
}
</script>
