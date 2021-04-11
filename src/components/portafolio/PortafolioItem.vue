<template>

  <div class="portafolio-item" v-for="item in items" :key="item">
      <div class="portafolio-item-inner outer-shadow" v-if="others && item.others || alls || webs && item.web || experiments && item.experiments">
          <div class="portafolio-item-img">
            <img :src="item.src">
          </div>
          <p class="portafolio-item-tittle">{{item.title}}</p>
          <!-- Btn project view -->
          <a  target="_blank" :href="item.link"><span class="btn-1 outer-shadow hover-in-shadow view-project">View Project</span></a>
      </div>
      
  </div>
</template>

<script>

import { inject } from 'vue'

export default {
    setup(){
        const alls = inject("alls")
        const others = inject("others")
        const webs = inject("webs")
        const experiments = inject("experiments")

        return{
            items:[
                {src:"https://media.discordapp.net/attachments/804511906735718421/830840618590142534/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f363238393635353537.png?width=527&height=382",title:"TODO APP VUE JS 3",link:"https://github.com/JCruzMi/ToDoApp",experiments:true,web:false,others:false},
                {src:"https://media.discordapp.net/attachments/804511906735718421/830841420859310120/emotes.png?width=525&height=525",title:"Bot Discord Medi",link:"https://github.com/JCruzMi/MusicBot",experiments:false,web:false,others:true},
                {src:"https://media.discordapp.net/attachments/804511906735718421/830841629229318224/unknown.png?width=525&height=409",title:"PokeApi",link:"https://github.com/JCruzMi/poke-api-vue",experiments:true,web:true,others:false},
                {src:"https://media.discordapp.net/attachments/804511906735718421/830844969111126026/unknown.png?width=531&height=390",title:"CovidApp",link:"https://covidreporter.netlify.app",experiments:false,web:true,others:false},
                {src:"https://media.discordapp.net/attachments/804511906735718421/830845646168653854/udkmMedi.png?width=531&height=531",title:"Dibujos",link:"https://www.instagram.com/huanmurato/",experiments:false,web:false,others:true},
            
            ],alls,others,webs,experiments
        }



    }

}
</script>

<style>
.portafolio-item{
    flex:0 0 33.33%;
    max-width: 33.33%;
    padding: 15px;;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
}

.portafolio-item .portafolio-item-inner{
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

.portafolio-item .portafolio-item-img img{
    border-radius: 5px;
    width: 100%;
    transition: all 0.3s ease;
}

.portafolio-item .portafolio-item-inner p{
    font-size: 16px;
    margin: 10px 0 0;
    color: var(--text-black-600);
    text-transform: capitalize;
}

.portafolio-item .portafolio-item-inner span{
    margin-left: 25%;
    
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

@media only screen and (max-width: 700px) {
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