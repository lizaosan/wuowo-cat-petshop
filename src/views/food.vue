<template>
    <div>
        <Products/>
    </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'
export default {
  name: 'food',
  components: {
    Products
  }
}
</script>
