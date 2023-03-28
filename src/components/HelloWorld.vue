<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <div class="test">test</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import dayjs from 'dayjs'

defineProps<{
    msg: string
}>()
const time = ref<string | Date>('')
onMounted(() => {
    const { proxy } = getCurrentInstance() as any
    time.value = dayjs().format('YYYY')
})
</script>
<style scoped lang="scss">
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
    .test {
    }
}

::v-deep(.table) {
}
</style>
