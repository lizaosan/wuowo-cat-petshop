<template>
    <div>
        <div class="container-fluid">
            <img src="../assets/products-food.jpg" class="img-fluid" alt="">
        </div>
        <Products/>
        <Pagination/>
    </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'food',
  components: {
    Products,
    Pagination
  }
}
</script>
