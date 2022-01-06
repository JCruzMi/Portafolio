<template>

  <div class="portafolio-item" v-for="item in items" :key="item">
      <div class="portafolio-item-inner outer-shadow">
          <div class="portafolio-item-img">
            <img :src="item.src">
          </div>
          <p class="portafolio-item-tittle">{{item.title}}</p>
          <!-- Btn project view -->
          <a target="_blank" :href="item.link"><span class="btn-1 outer-shadow hover-in-shadow view-project">View Project</span></a>
      </div>
  </div>
</template>

<script>

import { inject } from 'vue'

export default {
    setup(){
        
        

        const items= inject("items")

        return{
            items
        }



    }

}
</script>

<style>
.portafolio-item{
    flex:0 0 33.33%;
    max-width: 33.33%;
    min-width: 33.33%;
    padding: 15px;;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
}

.portafolio-item .portafolio-item-inner{
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 400px;
}

.portafolio-item .portafolio-item-img{
    justify-content: center;
    align-items: center;
    display: flex;
}

.portafolio-item .portafolio-item-img img{
    border-radius: 5px;
    width: auto;
    height: 180px;
    min-height: 150px;
    max-height: 200px;
    transition: all 0.3s ease;
}

.portafolio-item .portafolio-item-inner p{
    font-size: 16px;
    margin: 10px 0 0;
    color: var(--text-black-600);
    text-transform: capitalize;
}

.portafolio-item .portafolio-item-inner span{
    
    margin-top: 10px;
}

.portafolio-item .portafolio-item-inner:hover .view-project{
    animation: pulse;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.portafolio-item .portafolio-item-inner:hover .portafolio-item-img img{
    transition: all 0.3s ease;
    transform: translateY(-25px)
}

.portafolio-item .portafolio-item-inner .view-project:hover{
    box-shadow: var(--inner-shadow);
    color: var(--text-salmon-700);
    animation-iteration-count: 0;
}

@media only screen and (max-width: 780px) {
  .portafolio-item{
    flex:0 0 50%;
    max-width: 50%;
    padding: 0 30px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
  }
  .portafolio-item .portafolio-item-inner{
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}
}

@media only screen and (max-width: 650px) {
  .portafolio-item{
    flex:0 0 100%;
    max-width: 100%;
    padding: 0 30px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>