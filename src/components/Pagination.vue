<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <nav aria-label="Page navigation product">
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                            <a href="#" class="page-link border-0" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link border-0">1</a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link border-0">2</a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link border-0">3</a>
                        </li>
                        <li class="page-item border-0">
                            <a href="#" class="page-link border-0" aria-label="Next">
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
  props: ['getPage'],
  data () {
    return {
      page: 1,
      perPage: 4,
      pages: []
    }
  },
  methods: {
    setPages () {
      // 分頁參考 https://codepen.io/parths267/pen/bXbWVv?editors=1010
      let numberOfPages = Math.ceil(this.getPage.length / this.perPage)
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i)
      }
      console.log(this.pages)
    }
  },
  created () {
    this.setPages()
  }
}
</script>
