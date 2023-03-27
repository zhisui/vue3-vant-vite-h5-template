<template>
  <div class="about">
    <h1>This is an about page 测试页面</h1>
  </div>
</template>
<script setup lang="ts">
import {onMounted} from 'vue'
onMounted(() => {
    const aboutDom = document.querySelector('.about')
    document.addEventListener('touchstart', (e) => {
        console.log(e, 'e');



        [...e.changedTouches].forEach((touch) => {
            const dot = document.createElement('div')
            console.log(touch.clientX,'touch是什么');

            dot.classList.add('dot')
            dot.style.top = `${touch.clientX}px`
            dot.style.left = `${touch.pageX}px`
            aboutDom.appendChild(dot)
        })
    })

})
</script>

<style scoped>

</style>
