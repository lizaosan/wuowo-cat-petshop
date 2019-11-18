<template>
    <div class="container">
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-pale-peach navbar-fixed-right">
                <a class="navbar-brand text-primary mr-4" @click="paw = ''" href="#">
                    <img src="../assets/storeIcon.svg" width="120" height="45" class="d-inline-block align-top" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item mr-4">
                        <a class="nav-link text-primary small" @click="paw = 'food'" href="#"><i class="fas" :class="{'fa-paw': paw == 'food'}"></i> 貓咪食品</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-primary small" @click="paw = 'supply'" href="#"><i class="fas" :class="{'fa-paw': paw == 'supply'}"></i> 貓咪居家</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-primary small" @click="paw = 'clean'" href="#"><i class="fas" :class="{'fa-paw': paw == 'clean'}"></i> 貓咪清潔</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
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
