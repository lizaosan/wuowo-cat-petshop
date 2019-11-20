<template>
    <div class="container">
        <div class="carousel slide" data-ride="carousel" id="carousel-demo">
            <ol class="carousel-indicators">
                <li data-target="#carousel-demo" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-demo" data-slide-to="1"></li>
                <li data-target="#carousel-demo" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <!--Slide Photo-->
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../assets/carousel_kittyMac.jpg" alt="">
                  <div class="carousel-caption right d-none d-md-block w-25 h-100 ml-auto mr-auto">
                    <h4>食品嚴格把關</h4>
                    <h4>寶貝吃得健康</h4>
                    <button type="button" class="btn btn-outline-light"><i class="fas fa-paw"></i> 找罐罐</button>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../assets/carousel_catInRug.jpg" alt="">
                  <div class="carousel-caption left d-none d-md-block w-25 h-100">
                    <h4>為你的毛寶貝</h4>
                    <h4>添購一切所需</h4>
                    <button type="button" class="btn btn-outline-light"><i class="fas fa-paw"></i> 購物去</button>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../assets/carousel_closeEye.jpg" alt="">
                  <div class="carousel-caption right d-none d-md-block w-25 h-100 ml-auto mr-auto">
                    <h4>乾淨的毛髮</h4>
                    <h4>維護貓咪整潔</h4>
                    <button type="button" class="btn btn-outline-light"><i class="fas fa-paw"></i> 清潔用品</button>
                  </div>
                </div>
                <!--Hidden Button-->
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

<style lang="scss" scoped>
$primary: #D9A97E;
$transparent-primary: rgba(177, 105, 72, 0.5);

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
  background: $primary;
}

.carousel-caption {
  background-color: $transparent-primary;
  bottom: 0px;
  padding-top: 20%;
}

.right {
  left: 70%;
}

.left {
  left: 5%;
}

.carousel-caption .btn {
  margin-top: 1rem;
}
</style>
