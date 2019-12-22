<template>
  <div class="wrapper">
    <app-textlockup />
    <app-sales-info />
    <app-featured-products />
    <div class="great-words">
      <span class="one">For the</span>
      <span class="two">love of</span>
      <span class="three">books.</span>
      <span class="four">Do buy some</span>
      <span class="five">Love books</span>
      <div class="img">
        <img src="/reading3.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
import AppTextlockup from '~/components/AppTextlockup.vue'
import AppSalesInfo from '~/components/AppSalesInfo.vue'
import AppFeaturedProducts from '~/components/AppFeaturedProducts.vue'

export default {
  components: {
    AppTextlockup,
    AppSalesInfo,
    AppFeaturedProducts
  }
}
</script>

<style lang="scss">
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}

.great-words {
  display: grid;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
  margin: 45px 0;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .one,
  .two,
  .three,
  .four,
  .five {
    font-size: 120px;
    line-height: 0.787;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
    color: #fff;
    background-image: url(/painting.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .one {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .two {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  .three {
    grid-row: 3/4;
    grid-column: 1/2;
  }

  .four {
    grid-row: 1/2;
    grid-column: 3/4;
    transform: rotate(90deg);
    font-size: 60px;
  }

  .five {
    grid-row: 3/4;
    grid-column: 3/4;
    font-size: 50px;
  }

  .img {
    grid-row: 1/4;
    grid-column: 2/4;
    border-radius: 50%;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
}
</style>
