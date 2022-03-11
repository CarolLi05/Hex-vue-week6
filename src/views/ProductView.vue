<template>
  <h2>single product list</h2>
  <div class="container">
    <img :src="product.imageUrl" class="card-img-top" alt="...">
  </div>
  {{product}}
</template>

<script>
export default {
  data () {
    return {
      product: []
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route)
      const { id } = this.$route.params
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log('getProduct', res)
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
