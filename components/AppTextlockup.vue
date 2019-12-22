<template>
  <div class="textlockup">
    <div class="img">
      <img src="/reading.png" alt="shoe" />
    </div>
    <div class="details">
      Get the best deals, best pricing. All the good stuff. --->
    </div>
    <div class="heading">
      Grab some fresh books.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.textlockup {
  position: relative;

  .heading {
    width: 50%;
    font-size: 20vmin;
    color: #c1cfff;
    text-transform: uppercase;
    line-height: 0.8;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .details {
    font-size: 2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    transform: rotate(90deg) translateX(-50px);
    transform-origin: 0;
    position: absolute;
    top: 10%;
    left: 0;
    width: 40%;
  }

  .img {
    max-width: 1000px;
    margin-left: auto;
    margin-right: 0;
    margin-top: -5%;

    img {
      width: 95%;
    }
  }
}

@media screen and (max-width: 1100px) {
  .textlockup {
    .heading {
      font-size: 12vmin;
    }
  }
}
</style>
