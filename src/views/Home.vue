<template>
<!-- home section start -->

  <div class="animate__animated animate__fadeInLeft home-section section">
    <!-- animaations start -->
    <div class="effect-wrap">
      <div class="effect effect-1"></div>
      <div class="effect effect-2"></div>
    </div>
    <!-- animaations end -->
    <div class="container">
      <div class="row full-screen align-items-center">
        <div class="home-text">
          <!-- component -->
          <pheader></pheader>
        </div>
        <div class="home-img">
          <div class="img-box inner-shadow">
            <img class="outer-shadow" src="https://media.discordapp.net/attachments/809903524463902752/819316880908222524/pruebaMediv2live2d.png?width=528&height=528">
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- home section end -->
<!-- little about section start -->
  
  <Labout />

<!-- little about section end -->
</template>

<script>
import Labout from '../components/Labout.vue'
import Pheader from '../components/Pheader.vue'

// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Pheader,
    Labout
    
    
  }
}
</script>

<style>
.home-section{
  position: relative;
  overflow: hidden;
}

.home-section .full-screen{
  padding: 50px 0;
  min-height: 100vh;
}

.home-section .home-text,
.home-section .home-img{
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}

.home-section .home-img .img-box{
  max-width: 450px;
  display: block;
  margin: auto;
  border-radius: 50%;
  padding: 15px;
}
.home-section .home-img .img-box img{
  width: 100%;
  border-radius: 50%;
  border: 10px solid transparent;
}

</style>