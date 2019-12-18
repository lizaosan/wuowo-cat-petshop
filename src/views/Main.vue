<template>
    <div>
        <Carousel/>
        <RandomProduct/>
        <ParallaxScroll/>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import ParallaxScroll from '@/components/ParallaxScroll.vue'
import RandomProduct from '@/components/RandomProduct.vue'

export default {
  name: 'main',
  components: {
    Carousel,
    ParallaxScroll,
    RandomProduct
  }
}
</script>
