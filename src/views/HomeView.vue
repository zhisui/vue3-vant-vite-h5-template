<template>
    <main>
        <TheWelcome />
        <div class="lang">test</div>
    </main>
</template>

<script setup lang="ts">
import { homeApi } from '@/api'
import { onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
onMounted(() => {
    console.log('执行没有')
    let a
    getTreatmentStatus()
})

const getTreatmentStatus = async () => {
    const res = await homeApi.getTreatmentStatus()
    console.log(res, 'res')
}
</script>

<style scoped lang="scss">
.lang {
}
</style>
