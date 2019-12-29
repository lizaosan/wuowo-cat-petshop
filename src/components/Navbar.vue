<template>
    <nav class="mb-1 navbar navbar-expand-md navbar-light bg-lignt">
        <div class="container">
            <router-link class="navbar-brand  mr-4" @click.native="paw = ''" to="/">
                <img src="../assets/storeIcon.svg" width="120" height="45" class="d-inline-block align-top">
            </router-link>
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
                        <router-link class="nav-link text-primary" @click.native="paw = 'food'" to="/products">
                            <i class="fas" :class="{'fa-paw': paw == 'food'}"></i> <small :class="{'font-weight-bold': paw == 'food'}">貓咪食品</small>
                        </router-link>
                    </li>
                    <li class="nav-item mr-4">
                        <router-link class="nav-link text-primary" @click.native="paw = 'supply'" to="/products">
                            <i class="fas" :class="{'fa-paw': paw == 'supply'}"></i> <small :class="{'font-weight-bold': paw == 'supply'}">貓咪居家</small>
                        </router-link>
                    </li>
                    <li class="nav-item mr-4">
                        <router-link class="nav-link text-primary" @click.native="paw = 'clean'" to="/products">
                            <i class="fas" :class="{'fa-paw': paw == 'clean'}"></i> <small :class="{'font-weight-bold': paw == 'clean'}">貓咪清潔</small>
                        </router-link>
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
  },
  created () {
    this.$bus.$emit('categoryChangedEvent', '這裡是一段訊息')
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
