<template>
  <div>
      <Navbar/>
      <Carousel/>
      <RandomProduct/>
      <ParallaxScroll/>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import ParallaxScroll from '@/components/ParallaxScroll.vue'
import Footer from '@/components/Footer.vue'
import RandomProduct from '@/components/RandomProduct.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Carousel,
    ParallaxScroll,
    Footer,
    RandomProduct
  }
}
</script>
