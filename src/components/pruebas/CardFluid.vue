<template>
    <div class="container">
        <div class="flex">
            <span class="btn outer-shadow"><i class="fas fa-chevron-up"></i></span>
            <div class="top outer-shadow">                
                <span class="titulo">Huan Mura TO</span>
                <span class="text"><i class="fas fa-chevron-right"></i> Programador</span>
                <span class="text"><i class="fas fa-chevron-right"></i> Dibujante</span>
            </div>
            <div class="box">
                <div class="linea1"></div>
                <div class="linea1"></div>
                <div class="linea2"></div>
                <div class="linea2"></div>
                <div class="linea3"></div>
            </div>
            <div class="down outer-shadow">
                <span class="titulo">Redes</span>
                <span class="text">
                    <social :icon="''" :name="'instagram'" :link="'https://www.instagram.com/huanmurato/'"></social>
                    <social :icon="''" :name="'linkedin'" :link="'https://www.linkedin.com/in/juan-david-cruz-huan/'"></social>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

import Social from "../Social.vue"

export default {
  components: { Social },

}
</script>

<style scoped>

.container{
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}   

.top{
	width: 295px;
    height: 325px;
    border-radius:40px;
	text-align:center;
    background-color: var(--bg-black-50);
    z-index: 99;
    transition: all 0.56s ease;
}

.btn i{
    transform: rotate(0deg);
    transition: all 0.3s ease;
    color: var(--bg-black-900);
}

.btn{
    position: absolute;
    margin-top: -1.5rem;
    margin-left: 7.2rem;
    z-index: 97;
    font-size: 20px;
    background-color: var(--bg-black-50);
    border-radius: 20px;
    padding: 1rem 1.4rem 1rem 1.4rem;
    transition: all 0.56s ease;
    cursor: pointer;
}

.titulo{
    font-weight: 550;
    letter-spacing: 2px;
    z-index: 99;
    color: var(--bg-black-900);
}

.top .titulo{
    z-index: 99;
    position: absolute;
    font-size: 24px;
    display: block;
    margin-top:5rem;
    width: 295px;
    padding: 2rem;
    transition: all 0.56s ease;
}

.top .text{
    z-index: 99;
    position: absolute;
    color: var(--bg-black-900);
    font-size: 18px;
    width: 295px;
    display: block;
    margin-top:9rem;
    padding: 2rem;
    transition: all 0.56s ease;
}

.top span:last-child {
    margin-top: 12rem;
}

.flex:hover .titulo {
    color: var(--text-salmon-700);
}

.flex:hover .btn{
    transition: all 0.56s ease;
    transform: translateY(-6rem);
    border-radius: 20px;
}

.flex:hover .top{
    transition: all 0.56s ease;
    transform: translateY(-6rem);
    height: 245px;
    z-index: 99;
}

.flex:hover .top .titulo,
.flex:hover .top .text{
    transition: all 0.56s ease;
    transform: translateY(-3rem);
}


.flex:hover .down{
    transition: all 0.56s ease;
    transform: translateY(15.5rem);
    visibility: visible;
    z-index: -1;
}

.flex:hover .down .titulo,
.flex:hover .down .text{
    visibility: visible;
}

.flex:hover > .btn i{
    transform: rotate(180deg);
    transition: all 0.3s ease;
}

.down{
    transition: all 0.3s ease;
	width: 295px;
    height: 188px;
    border-radius:40px;
	text-align:center;
    z-index: -1;
    margin-top: -15.8rem;
    visibility: hidden;
    background-color: var(--bg-black-50);
}

.down .titulo{
    position: absolute;
    color: white;
    font-size: 24px;
    display: block;
    margin-top: 0rem;
    width: 295px;
    padding: 2rem;
    color: var(--bg-black-900);
    visibility: hidden;
}

.down .text{
    position: absolute;
    color: white;
    font-size: 16px;
    width: 295px;
    display: block;
    margin-top:4rem;
    padding: 2rem;
    color: var(--bg-black-900);
    visibility: hidden;
}

.linea1{
    /*#146cb3*/
    border-radius: 0px 0px 0px 30px;
    background-color: var(--bg-black-100);
    height: 100px;
    width: 40px;
    position: absolute;
    z-index: -3;
    margin-top: -6.3rem;
    margin-left: 0.5rem;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transition: .1s linear;
    visibility: hidden;
}

.linea1:nth-child(even) {
    margin-left: 7rem;
    width: 60px;
    border-radius: 0px;
}

.flex:hover .linea1{
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: all 0.60s ease;
    visibility: visible;
}

.linea2{
    /*#146cb3*/
    background-color: var(--bg-black-100);
    height: 100px;
    width: 60px;
    position: absolute;
    z-index: -3;
    margin-top: -6.3rem;
    margin-left: 3.5rem;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transition: .1s linear;
    visibility: hidden;
}

.linea2:nth-child(even) {
    margin-left: 11rem;
    width: 90px;
}

.flex:hover .linea2{
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: all 0.60s ease;
    visibility: visible;
}


.linea3{
    /*#146cb3*/
    border-radius: 0px 0px 30px 0px;
    background-color: var(--bg-black-100);
    height: 100px;
    width: 40px;
    position: absolute;
    z-index: -3;
    margin-top: -6.3rem;
    margin-left: 15rem;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transition: .1s linear;
    visibility: hidden;
}

.flex:hover .linea3{
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: all 0.50s ease;
    visibility: visible;
}

</style>