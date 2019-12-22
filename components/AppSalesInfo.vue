<template>
  <section class="sales-info">
    <div class="img">
      <img src="/reading2.png" alt="" />
    </div>
    <div>
      <div class="info">
        <h4>1</h4>
        <h5>Huge Collection</h5>
      </div>
      <div class="info">
        <h4>2</h4>
        <h5>Fast Delivery</h5>
      </div>
      <div class="info">
        <h4>3</h4>
        <h5>24/7 Support</h5>
      </div>
      <div class="info">
        <h4>4</h4>
        <h5>Great Deals</h5>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sales-info {
  margin: 110px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;

  .img {
    width: 65%;
    img {
      animation: 2.5s ease-in-out infinite alternate-reverse jackin;
      max-width: 100%;
    }
  }

  .info {
    display: flex;
    margin-bottom: 30px;
    justify-content: flex-end;
  }

  h4 {
    font-size: 5vmin;
    color: #eaeaea;
    margin-bottom: 0;
    order: 2;
    margin-left: 15px;
  }

  h5 {
    font-size: 10vmin;
    line-height: 0.8;
    color: #fbafa4;
  }
}

@media screen and (max-width: 1000px) {
  .sales-info {
    h4 {
      font-size: 4vmin;
    }
    h5 {
      font-size: 8vmin;
    }
  }
}

@media screen and (max-width: 850px) {
  .sales-info {
    h4 {
      font-size: 3vmin;
    }
    h5 {
      font-size: 5vmin;
    }
  }
}

@media screen and (max-width: 600px) {
  .sales-info {
    h4 {
      font-size: 2.5vmin;
    }
    h5 {
      font-size: 3.5vmin;
    }
  }
}

@keyframes jackin {
  from {
    transform: rotate(-4deg);
  }

  to {
    transform: rotate(2deg);
  }
}
</style>
