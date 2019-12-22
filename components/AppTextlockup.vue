<template>
  <div class="textlockup">
    <div class="img">
      <slot name="img">
        <img src="/reading.png" alt="shoe" />
      </slot>
    </div>
    <div class="heading">
      <slot name="heading">Grab some fresh books.</slot>
    </div>
    <div class="details">
      <slot name="details"
        >Get the best deals, best pricing. All the good stuff. --->
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.textlockup {
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  grid-template-rows: repeat(3, minmax(150px, 1fr));
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .heading {
    grid-area: 1 / 3 / 3 / -1;
    font-size: 20vmin;
    color: #c1cfff;
    text-transform: uppercase;
    line-height: 0.8;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .details {
    grid-area: 1/1;
    font-size: 2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    transform: rotate(90deg) translateX(-50px);
    transform-origin: 0;
  }

  .img {
    max-width: 950px;
    grid-area: 1 / 1 / -1 / -1;

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

    .details {
      font-size: 1.2vmin;
    }
  }
}

@media screen and (max-width: 950px) {
  .textlockup {
    .heading {
      font-size: 10vmin;
    }
    .details {
      font-size: 1vmin;
    }
  }
}

@media screen and (max-width: 750px) {
  .textlockup {
    .heading {
      font-size: 8vmin;
    }
  }
}

@media screen and (max-width: 550px) {
  .textlockup {
    .heading {
      font-size: 5vmin;
    }
  }
}
</style>
