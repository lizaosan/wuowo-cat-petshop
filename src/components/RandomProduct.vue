<template>
    <div class="container mt-2">
      <div class="row">
        <div class="col-12 mt-2 title">
          <h4>推薦商品</h4>
        </div>
        <a href="#" class="col-12 col-md-6 col-lg-3 mb-2 pt-3">
          <div href="#" class="card border-0">
            <img src="../assets/petcurean-01.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <h6 class="card-title" style="height: 24px;">Petcurean Go! 高含肉量無穀系列（四肉混和）</h6>
              <h5 class="card-text">
                <div class="d-flex justify-content-between align-items-baseline">
                <div>原價 1980 元</div>
                <div class="badge float-right text-danger">特價 1740 元</div>
              </div>
              </h5>
            </div>
            <div class="card-footer bg-transparent ">
              <button class="btn btn-primary btn-block text-white mr-1"><i class="fas fa-paw"></i> 查看詳情</button>
            </div>
          </div>
        </a>
        <a href="#" class="col-12 col-md-6 col-lg-3 mb-2 pt-3">
          <div href="#" class="card border-0">
            <img src="../assets/kitcat-01.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <h6 class="card-title" style="height: 24px;">Kit Cat 無穀物貓罐頭（雞銀魚口味）</h6>
              <h5 class="card-text">
                <div class="d-flex justify-content-between align-items-baseline">
                <div>原價 25 元</div>
                <div class="badge float-right text-danger">特價 20 元</div>
              </div>
              </h5>
            </div>
            <div class="card-footer bg-transparent">
              <button class="btn btn-primary btn-block text-white mr-1"><i class="fas fa-paw"></i> 查看詳情</button>
            </div>
          </div>
        </a>
        <a href="#" class="col-12 col-md-6 col-lg-3 mb-2 pt-3">
          <div href="#" class="card border-0">
            <img src="../assets/cattoy-01.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <h6 class="card-title" style="height: 24px;">貓薄荷潔牙棒棒糖</h6>
              <h5 class="card-text">
                <div class="d-flex justify-content-between align-items-baseline">
                <div>原價 360 元</div>
                <div class="badge float-right text-danger">特價 320 元</div>
              </div>
              </h5>
            </div>
            <div class="card-footer bg-transparent">
              <button class="btn btn-primary btn-block text-white mr-1"><i class="fas fa-paw"></i> 查看詳情</button>
            </div>
          </div>
        </a>
        <a href="#" class="col-12 col-md-6 col-lg-3 mb-2 pt-3">
          <div href="#" class="card border-0">
            <img src="../assets/cattree-01.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <h6 class="card-title" style="height: 24px;">樂妃實木貓跳台</h6>
              <h5 class="card-text">
                <div class="d-flex justify-content-between align-items-baseline">
                <div>原價 750 元</div>
                <div class="badge float-right text-danger">特價 590 元</div>
              </div>
              </h5>
            </div>
            <div class="card-footer bg-transparent">
              <button class="btn btn-primary btn-block text-white mr-1"><i class="fas fa-paw"></i> 查看詳情</button>
            </div>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      random4: []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`
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
      console.log(shuffled.slice(min))
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
  font-size: 14px;
}
.card-text{
  text-align: left;
  font-size: 12px
}
.title {
  font-family:"Microsoft JhengHei";
  letter-spacing: 4px;
}
.fas {
  color: rgb(255, 255, 255);
}
a:hover {
  text-decoration:none;
  transform: scale(1.02);
  box-shadow: 2px 2px 8px #999;
  transition: transform 0.2s ease-out;
}
</style>
