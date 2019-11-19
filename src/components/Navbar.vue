<template>
    <!-- <div class="container">
        <div class="row align-items-center">
            <div class="col-auto mr-auto">
                <ul class="nav align-items-center">
                    <li class="nav-item">
                        <a class="navbar-brand" @click="paw = ''" href="#">
                            <img src="../assets/storeIcon.svg" width="120" height="45" class="d-inline-block align-top">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-primary small" @click="paw = 'food'" href="#">
                            <i class="fas" :class="{'fa-paw': paw == 'food'}"></i> 貓咪食品
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-primary small" @click="paw = 'supply'" href="#">
                            <i class="fas" :class="{'fa-paw': paw == 'supply'}"></i> 貓咪居家
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-primary small" @click="paw = 'clean'" href="#">
                            <i class="fas" :class="{'fa-paw': paw == 'clean'}"></i> 貓咪清潔
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-auto">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fas fa-shopping-cart fa-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div> -->
    <!-- <div class="container">
        <div class="row align-items-center">
            <nav class="navbar">
                <a class="nav-brand" href="#">
                    <img src="../assets/storeIcon.svg" style="max-height: 45px;">
                </a>
            </nav>
        </div>
    </div> -->
    <nav class="mb-1 navbar navbar-expand-lg navbar-light bg-lignt">
        <div class="container">
            <a class="navbar-brand" @click="paw = ''" href="#">
                <img src="../assets/storeIcon.svg" width="120" height="45" class="d-inline-block align-top">
            </a>
            <div class="d-flex flex-row order-md-1 order-lg-2">
                <ul class="navbar-nav sub-nav flex-row mr-1">
                    <li class="nav-item">
                        <a href="#" class="nav-link mr-2">
                            <i class="fas fa-shopping-cart fa-lg"></i>
                        </a>
                    </li>
                </ul>
                <button class="navbar-toggler ml-auto custom-toggler mr-md-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
            </div>
            <!-- 選單 -->
            <div class="collapse navbar-collapse order-md-2 order-lg-1" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mr-4">
                        <a class="nav-link text-primary small" @click="paw = 'food'" href="#">
                            <i class="fas" :class="{'fa-paw': paw == 'food'}"></i> 貓咪食品
                        </a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-primary small" @click="paw = 'supply'" href="#">
                            <i class="fas" :class="{'fa-paw': paw == 'supply'}"></i> 貓咪居家
                        </a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-primary small" @click="paw = 'clean'" href="#">
                            <i class="fas" :class="{'fa-paw': paw == 'clean'}"></i> 貓咪清潔
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      paw: ''
    }
  }
}
</script>

<style scoped>
.navbar-nav {
  display: flex;
  flex-flow: row nowrap;
}
.custom-toggler.navbar-toggler {
  border-width: 0px;
}

.fas {
  color: #D9A97E;
}

</style>
