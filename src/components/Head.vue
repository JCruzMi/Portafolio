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
    <div class="style-swich">
        <div class="day-night s-icon outer-shadow hover-in-shadow" 
            @click="onBg()"
            v-if="bg==''"
        >
            <i class="fas fa-moon"></i>
        </div>
        <div class="day-night s-icon outer-shadow hover-in-shadow" 
            @click="onBg()"
            v-else
        >
            <i class="fas fa-sun"></i>
        </div>
    </div>
</template>

<script>

import {ref, inject} from 'vue'

export default {
    setup(){
        const mNav = inject("mNav")

        const onMenuClick = () => {
            mNav.value = !mNav.value   
        }

        const bg = ref("")

        const onBg = () =>{
            if(bg.value == ""){
                document.body.classList.add('dark')
                bg.value = "dark"
            }else{
                document.body.classList.remove('dark')
                bg.value = ""
            }
        }


        return {mNav,onMenuClick,onBg, bg}
    }
}
</script>

<style scoped>

/**-------------
fuentes
------------- */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.style-swich{
    position: fixed;
    right: 0;
    top: 77px;
    padding: 15px;
    width: 200px;
    z-index: 102;
    border-radius: 5px;
    transition: all 0.3s ease;
    transform: translateX(65%)
}

.style-swich .s-icon{
    position: absolute;
    height: 40px;
    width: 40px;
    text-align: center;
    font-size: 20px;
    color: var(--text-black-900);
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease;
}
.style-swich .s-icon i{
    line-height: 40px;
}
.style-swich .s-icon:after{
    border-radius: 50%;
    transition: all 0.3s ease;
}

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