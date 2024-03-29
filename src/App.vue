<template>
  <transition 
    enter-active-class="animate__animated animate__lightSpeedInRight" 
    leave-active-class="animate__animated animate__lightSpeedOutRight"
    mode="out-in"  
  >
    <Nav v-if="mNav" />
  </transition>
  <transition 
    enter-active-class="animate__animated animate__fadeInLeft" 
    mode="out-in"  
  >
    <router-view/>
  </transition>
  
  <Head />
</template>

<script>
import {ref, provide} from 'vue'

import Head from './components/Head.vue'
import Nav from './components/Nav.vue'
export default {
  components: { Head, Nav },
  setup() {
    const mNav = ref(false)
    provide('mNav',mNav)

    return {mNav}
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
/**Light mode */
:root{
  --bg-black-900: #000;
  --bg-black-100: #ddd;
  --bg-black-50: #eff0f4;
  --text-black-900: #000;
  --text-link : rgb(172, 80, 95);
  --text-black-600: rgb(141, 141, 141);
  --text-salmon-700: #FC6D6D;
  --outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
  --outer-shadow-0: 0 0 0 #d0d0d0, 0 0 0 #f8f8f8;
  --inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
  --inner-shadow-0: inset 0 0 0 #d0d0d0, inset 0 0 0 #f8f8f8;
}
/**Dark mode */
body.dark{
  --bg-black-900: #fff;
  --bg-black-100: #353535;
  --bg-black-50: #2b2c2f;
  --text-black-900: #fff;
  --text-link : rgb(209, 194, 196);
  --text-black-600: #bbb;
  --text-salmon-700: #FC6D6D;
  --outer-shadow: 3px 3px 3px #222327, -3px -3px 3px #363636;
  --outer-shadow-0: 0 0 0 #222327, 0 0 0 #363636;
  --inner-shadow: inset 3px 3px 3px #222327, inset -3px -3px 3px #363636;
  --inner-shadow-0: inset 0 0 0 #222327, inset 0 0 0 #363636;
}

/**End Dark mode */

html{
  scroll-behavior: smooth;
  overflow-y: scroll;
}

::-webkit-scrollbar {
    display: none;
}

body{
  font-size: 16px;
  line-height: 1.5;
  overflow-x: hidden;
  background-color: var(--bg-black-50);
  font-family: 'Spartan', sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
::before,::after{
  box-sizing: border-box;
}
a:link, a:visited, a:active {
  text-decoration: none;
  color: var(--text-link);
  font-weight: 600;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
img{
  vertical-align: middle;
  max-width: 100%;
}

h2{
  color: var(--bg-black-900);
}

.container{
  max-width: 1140px;
  margin: auto;
}

.row{
  display: flex;
  flex-wrap: wrap;
}
.justify-content-between{
  justify-content: space-between;
}
.outer-shadow{
  box-shadow: var(--outer-shadow);
  transition: all 0.3s ease;
}
.inner-shadow{
  box-shadow: var(--inner-shadow);
  transition: all 0.3s ease;
}
.hover-in-shadow{
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.hover-in-shadow:hover{
  box-shadow: var(--outer-shadow-0);
}

.hover-in-shadow:after{
  content: '';
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transition: all 0.3 ease;
}

.hover-in-shadow:hover:after{
  box-shadow: var(--inner-shadow);
  transition: all 0.3s ease;
}

.align-items-center{
  align-items: center;
}

.effect-wrap .effect{
  position: absolute;
  z-index: -1;
}

.btn-1{
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  color: var(--bg-black-900);
  background-color: transparent;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.5 s ease;
  display: inline-block;
  border: none;
}
.btn-1:after{
  border-radius: 30px;
}

.effect-1{
  width: 200px;
  height: 200px;
  border: 6px solid #8a49ff;
  right: -5%;
  top: 80%;
  overflow: hidden;
  animation: spin 10s linear infinite;
}

@keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

.effect-2{
  width: 180px;
  height: 180px;
  border: 18px solid #8a49ff;
  border-radius: 50%;
  right: 88%;
  top: 30%;
  animation: toptBounce 5s ease-in-out infinite;
}

@keyframes toptBounce {
  0%,100%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(100px);
  }
}

.effect-3{
  height: 60vh;
  width: 20px;
  border: 18px solid #8a49ff;
  right: 7%;
  top: 15%;
  overflow: hidden;
  animation: toptBounce 10s ease-in-out infinite;
}

@keyframes leftBounce {
  0%,100%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(25px);
  } 
}

.effect-4{
  border-top: 160px solid transparent;
  border-left: 160px solid #06d89c;
  left: 40%;
  top: -4%;
  animation: leftBounce 10s ease-in-out infinite;
}

.section-title{
  padding: 0 15px;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
  margin-bottom: 60px;
}
.section-title h2{
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  margin: 0;
}

</style>
