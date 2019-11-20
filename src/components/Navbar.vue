<template>
    <nav class="mb-1 navbar navbar-expand-md navbar-light bg-lignt">
        <div class="container">
            <a class="navbar-brand" @click="paw = ''" href="#">
                <img src="../assets/storeIcon.svg" width="120" height="45" class="d-inline-block align-top">
            </a>
            <div class="d-flex flex-row order-sm-1 order-md-2">
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
            <div class="collapse navbar-collapse order-sm-2 order-md-1" id="navbarSupportedContent">
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
  color: #B16948;
}
</style>
