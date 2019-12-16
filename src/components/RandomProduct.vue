<template>
    <div class="container mt-2">
      <div class="row ml-auto mr-auto">
        <div class="card ml-auto mr-auto" style="width: 25%;">
          <img src="../assets/carousel_kittyMac.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example.</p>
          </div>
        </div>
        <div class="card ml-auto mr-auto" style="width: 25%;">
          <img src="../assets/carousel_kittyMac.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example.</p>
          </div>
        </div>
        <div class="card ml-auto mr-auto" style="width: 25%;">
          <img src="../assets/carousel_kittyMac.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example.</p>
          </div>
        </div>
        <div class="card ml-auto mr-auto" style="width: 25%;">
          <img src="../assets/carousel_kittyMac.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`
      const vm = this
      this.$http.get(api).then((response) => {
        console.log('來自 RandomProduct.vue 的 console', response.data)
        vm.products = response.data.products
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>
.card-title{
  text-align: left
}
.card-text{
  text-align: left
}
</style>
