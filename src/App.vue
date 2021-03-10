<template>
  <Head />
  <Nav v-if="mNav" />
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

:root{
  --bg-black-900: #000;
  --bg-black-100: #ddd;
  --text-black-600: rgb(141, 141, 141);
  --bg-black-50: #eff0f4;
  --outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
  --outer-shadow-0: 0 0 0 #d0d0d0, 0 0 0 #f8f8f8;
  --inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;;
}

body{
  font-size: 16px;
  line-height: 1.5;
  overflow-x: hidden;
  background-color: var(--bg-black-50);
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
a{
  text-decoration: none;
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
}
.inner-shadow{
  box-shadow: var(--inner-shadow)
}
.hover-in-shadow{
  position: relative;
  z-index: 1;
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
}

.align-items-center{
  align-items: center;
}

.effect-wrap .effect{
  position: absolute;
  z-index: -1;
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
