<template>
    <div class="container mt-2">
      <div class="row">
        <div class="col-12 mt-2 title">
          <h4>{{ title }}</h4>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-2 pt-3 shade-effect" v-for="item in products" :key="item.id">
          <div href="#" class="card border-0">
            <img :src="item.image" alt="" class="card-img-top">
            <div class="card-body">
              <h6 class="card-title" style="height: 36px;">{{item.title}}</h6>
              <h5 class="card-text" style="height: 20px;">
                <div class="d-flex justify-content-between align-items-baseline" v-if="item.origin_price !== item.price">
                  <del>原價 {{ item.origin_price }} 元</del>
                  <strong class="float-right text-danger">特價 {{ item.price }} 元</strong>
                </div>
                <div class="d-flex justify-content-between align-items-baseline" v-if="item.origin_price == item.price">
                  <div>定價 {{ item.price }} 元</div>
                </div>
              </h5>
            </div>
            <div class="card-footer bg-transparent ">
              <button class="btn btn-primary btn-block text-white mr-1"><i class="fas fa-paw"></i> 查看詳情</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '貓咪食品',
      products: [],
      random4: []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      this.$http.get(api).then((response) => {
        console.log('來自 RandomProduct.vue 的 console', response.data)
        vm.products = response.data.products
        this.getRandom(this.products, 4)
      })
    },
    getRandom (arr, count) {
      let shuffled = arr.slice(0)
      let i = arr.length
      let min = i - count
      let temp
      let index
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random())
        temp = shuffled[index]
        shuffled[index] = shuffled[i]
        shuffled[i] = temp
      }
      this.random4 = shuffled.slice(min)
      // getRandom 參考 https://blog.csdn.net/web_leeleon/article/details/80308727
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>

.card-title{
  text-align: left;
  font-size: 1.1rem;
}
.card-body{
  padding: 20px 0px 20px 0px;
}
.card-text{
  text-align: left;
  font-size: 1rem
}
.title {
  letter-spacing: 4px;
}
.fas {
  color: rgb(255, 255, 255);
}
.shade-effect:hover {
  text-decoration:none;
  transform: scale(1.02);
  box-shadow: 2px 2px 8px #999;
  transition: transform 0.2s ease-out;
}
</style>
