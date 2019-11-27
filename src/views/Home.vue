<template>
  <div>
      <Navbar/>
      <Carousel/>
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

export default {
  name: 'home',
  components: {
    Navbar,
    Carousel,
    ParallaxScroll,
    Footer
  }
}
</script>
