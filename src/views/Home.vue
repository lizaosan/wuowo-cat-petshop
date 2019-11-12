<template>
  <div>
      <Navbar/>
      <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Carousel
  }
}
</script>
