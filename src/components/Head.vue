<template>
  <div class="header" id="header">
    <div class="container">
        <div class="row justify-content-between">
            <div class="logo">
                <router-link to="/">J</router-link>
            </div>
            <div class="hamburger-btn outer-shadow hover-in-shadow" @click="onMenuClick()">
                <span></span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import {inject} from 'vue'

export default {
    setup(){
        const mNav = inject("mNav")

        const onMenuClick = () => {
            mNav.value = !mNav.value
            console.log(mNav.value)   
        }

        return {mNav,onMenuClick}
    }
}
</script>

<style scoped>

/**-------------
fuentes
------------- */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');


.header{
    padding: 20px 15px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
}

.header .logo a{
    display: inline-block;
    text-align: center;
    line-height: 36px;
    height: 40px;
    width: 40px;
    font-size: 24px;
    color: #000;
    border-radius: 50%;
    font-family: 'Poppins', sans-serif;
    border: 2px solid #000;
}


.header .hamburger-btn{
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    justify-content: center;
}

.header .hamburger-btn:after{
    border-radius: 50%;
}

.header .hamburger-btn span{
    display: block;
    height: 2px;
    width: 16px;
    background-color: var(--bg-black-900);
    position: relative;
}

.header .hamburger-btn span:before,
.header .hamburger-btn span:after{
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-black-900);
}

.header .hamburger-btn span:before{
    top: -6px;
}

.header .hamburger-btn span:after{
    top: 6px;
}
/** 
#header a.router-link-exact-active {
  color: #FC6D6D;
}
*/
</style>