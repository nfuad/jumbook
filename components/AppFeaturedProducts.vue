<template>
  <div class="wrapper">
    <section>
      <h2>
        <span>Featured Books</span>
      </h2>
      <div class="featureditems">
        <div v-for="product in featuredProducts" :key="product.id" class="item">
          <h3>{{ product.name }}</h3>
          <img :src="`/products/${product.img}`" />
          <h4>{{ product.price | dollar }}</h4>
          <NuxtLink :to="`/product/${product.id}`">
            <button class="multi-item">View Item ></button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
  width: 100%;
}

.featureditems {
  width: 100%;
  margin: 20px 0 70px;
  .item {
    box-shadow: 0 3px 10px 0px #eee;
    border-radius: 5px;
    padding: 15px 20px 30px;
    min-height: 150px;
    justify-self: center;
    align-self: center;
    text-align: center;
  }
}

h3 {
  margin-bottom: 15px;
}

h4 {
  color: #d96528;
  margin: 10px 0;
}

h2 {
  color: #d96528;
  text-align: center;
  overflow: hidden;
  margin-bottom: 100px;
}
h2 span {
  display: inline-block;
  position: relative;
}
h2 span:after,
h2 span:before {
  content: ' ';
  display: block;
  height: 1px;
  width: 1000px;
  background: #e6baa4;
  position: absolute;
  top: 50%;
}
h2 span:before {
  left: -1010px;
}
h2 span:after {
  right: -1010px;
}

@media screen and (max-width: 699px) {
  .featureditems {
    width: 83vw;
    margin-left: 5vw;
    div {
      padding: 10px 20px;
      margin-bottom: 10px;
    }
  }

  img {
    width: initial;
  }
}

@media screen and (min-width: 700px) {
  .featureditems {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 80px;
    grid-column-gap: 20px;
    grid-row-gap: 30px;
    div {
      padding: 40px 50px;
      max-width: 192px;
    }
  }

  img {
    margin-top: 20px;
    width: 100%;
    max-width: 150px;
    max-height: 200px;
  }
}
</style>
