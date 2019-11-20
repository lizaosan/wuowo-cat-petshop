<template>
    <div class="container">
        <div class="carousel slide" data-ride="carousel" id="carousel-demo">
            <ol class="carousel-indicators">
                <li data-target="#carousel-demo" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-demo" data-slide-to="1"></li>
                <li data-target="#carousel-demo" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/carousel_kittyMac.jpg" alt="">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="../assets/carousel_catInRug.jpg" alt="">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="../assets/carousel_closeEye.jpg" alt="">
                </div>
                <a href="#carousel-demo" class="carousel-control-prev" data-slide="prev">
                <span></span>
                </a>
                <a href="#carousel-demo" class="carousel-control-next" data-slide="next">
                <span></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.carousel-control {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
}
.item img {
  width: 100%;
  height: auto
}

ol.carousel-indicators {
  position: absolute;
  bottom: 0;
  margin: 0;
  left: 0;
  right: 0;
  width: auto;
}

ol.carousel-indicators li,
ol.carousel-indicators li.active {
  float: left;
  width: 33.33%;
  height: 0.2rem;
  margin: 0;
  border-radius: 0;
  border: 0;
  background: transparent;
}

ol.carousel-indicators li.active {
  background: #D9A97E;
}
</style>
