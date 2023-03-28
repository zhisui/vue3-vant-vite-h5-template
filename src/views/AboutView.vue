<template>
    <div class="about">
        <h1>This is an about page 测试页面</h1>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
    document.addEventListener('touchstart', (e) => {
        console.log(e, 'e')
        ;[...e.changedTouches].forEach((touch) => {
            const dot = document.createElement('div')
            console.log(touch.clientX, 'touch是什么')
            dot.classList.add('dot')
            dot.style.position = 'absolute'
            dot.style.top = `${touch.clientY}px`
            dot.style.left = `${touch.pageX}px`
            document.body.appendChild(dot)
        })
    })
})
</script>

<style scoped></style>
