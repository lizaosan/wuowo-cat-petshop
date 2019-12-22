<template>
    <div class="container mt-2">
      <div class="row">
        <div class="col-12 mt-2 title">
            <h4>{{ title }}</h4>
        </div>
        <div class="col-6 col-lg-3 mb-2 pt-3 shade-effect" v-for="item in displayedPosts" :key="item.id">
          <div href="#" class="card border-0">
            <img :src="item.image" alt="" class="card-img-top">
            <div class="card-body">
              <h6 class="card-title" style="height: 3rem; font-size: 1rem">{{item.title}}</h6>
              <h5 class="card-text" style="height: 1rem; font-size: 0.9rem">
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
        <div class="row mt-4">
            <div class="col-12">
                <nav aria-label="Page navigation product">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" v-if="currentPage != 1">
                            <a href="#" @click="currentPage--" class="page-link border-0" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item" v-for="(pageNumber, index) in pages" :key="pageNumber">
                            <a href="#" class="page-link border-0" :class="{'font-weight-light': index + 1 !== currentPage, 'font-weight-bold': index + 1 == currentPage }" @click="currentPage = pageNumber">{{ pageNumber }}</a>
                        </li>
                        <li class="page-item border-0" v-if="currentPage < pages.length">
                            <a href="#" @click="currentPage++" class="page-link border-0" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '貓咪食品',
      category: 'food',
      products: [],
      filteredProducts: [],
      currentPage: 1,
      perPage: 8,
      pages: []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      this.$http.get(api).then((response) => {
        console.log('來自 RandomProduct.vue 的 console', response.data)
        vm.products = response.data.products
        this.getFiltered()
      })
    },
    getFiltered () {
      this.filteredProducts = this.products.filter(function (item, index, array) {
        return item.category === '貓咪食品'
      })
      // 陣列內物件回傳參考資料 https://wcc723.github.io/javascript/2017/06/29/es6-native-array/#Array-prototype-filter
      this.setPages()
    },
    setPages () {
      // 分頁參考 https://codepen.io/parths267/pen/bXbWVv?editors=1010
      let numberOfPages = Math.ceil(this.filteredProducts.length / this.perPage)
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i)
      }
    },
    paginate (filteredProducts) {
      let currentPage = this.currentPage
      let perPage = this.perPage
      let from = (currentPage * perPage) - perPage
      let to = (currentPage * perPage)
      return filteredProducts.slice(from, to)
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.filteredProducts)
    }
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
