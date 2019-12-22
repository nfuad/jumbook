<template>
  <div class="storegrid">
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredprice" :key="item.id" class="item">
        <div class="img-container">
          <NuxtLink :to="`product/${item.id}`">
            <img :src="`/products/${item.img}`" />
          </NuxtLink>
        </div>
        <star-rating
          :rating="item.starrating"
          :star-size="15"
          :show-rating="false"
          active-color="#000"
          style="margin: 5px 0"
        ></star-rating>
        <h3>{{ item.name }}</h3>
        <h4 class="price">{{ item.price | dollar }}</h4>
        <NuxtLink :to="`product/${item.id}`">
          <button class="multi-item">View Item ></button>
        </NuxtLink>
      </div>
    </transition-group>
    <aside>
      <h3>Special Sale</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
        iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam
        quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit
        itaque?
      </p>
      <h3>Filter by Price:</h3>
      <p style="margin-top: 5px">
        Max Price
        <strong>${{ pricerange }}</strong>
      </p>
      <input
        id="pricerange"
        v-model="pricerange"
        :min="min"
        :max="max"
        class="slider"
        type="range"
        step="0.1"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </aside>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating/src/star-rating.vue'

export default {
  components: {
    StarRating
  },
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      min: 0,
      max: 200,
      pricerange: 200
    }
  },
  computed: {
    filteredprice() {
      return this.data.filter((el) => el.price < this.pricerange)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
}

.img-container {
  max-height: 200px;
  max-width: 150px;
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 15px;
  img {
    width: 100%;
  }
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px 10px;
}

aside {
  height: 100%;
  width: 100%;
}

.max {
  display: inline-block;
  float: right;
}
</style>
