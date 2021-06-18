<template>
  <div class="nav-menu" id="nav">
    <div class="close-nav-menu outer-shadow hover-in-shadow" @click="onMenuClick()">&times;</div>
    <div class="nav-menu-inner">
        <ul>
            <li @click="onMenuClick()"><router-link class="outer-shadow hover-in-shadow" to="/">Home</router-link></li>
            <li @click="onMenuClick()"><router-link class="outer-shadow hover-in-shadow" to="/about">About</router-link></li>
            <li @click="onMenuClick()"><router-link class="outer-shadow hover-in-shadow" to="/skills">Skills</router-link></li>
            <li @click="onMenuClick()"><router-link class="outer-shadow hover-in-shadow" to="/portafolio">Portafolio</router-link></li>
            <li @click="onMenuClick()"><router-link class="outer-shadow hover-in-shadow" to="/contact">Contacto</router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
import {inject} from 'vue'

export default {
    setup() {
        const mNav = inject("mNav")
        const onMenuClick = () => {
            mNav.value = !mNav.value
            window.scrollTo(0, 0)
        }

        return {mNav,onMenuClick}
    }
}
</script>

<style scoped>

.nav-menu{

    position: fixed;
    background-color: var(--bg-black-50);
    padding: 0 15px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
}
.nav-menu .close-nav-menu{
    height: 40px;
    width: 40px;
    display: block;
    font-size: 35px;
    line-height: 35px;
    border-radius: 50%;
    top: 20px;
    right: 15px;
    color: #000;
    text-align: center;
    position: absolute;
    cursor: pointer;    
}
.nav-menu .close-nav-menu:after{
    border-radius: 50%;
}
.nav-menu-inner{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-menu ul{
    padding: 15px;
}

.nav-menu ul li{
    display: block;
    margin-bottom: 20px;
    text-align: center;
}

.nav-menu ul li:last-child{
    margin-bottom: 0;
}
.nav-menu ul li a{
    display: inline-block;
    font-size: 28px;
    font-weight: 600;
    color: #000;
    padding: 5px 30px;
}

#nav a.router-link-exact-active {
  color: #FC6D6D;
  transition: all 0.3s ease;
  animation: pulse;
    animation-delay: 1.2s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  box-shadow: var(--inner-shadow)
}

</style>