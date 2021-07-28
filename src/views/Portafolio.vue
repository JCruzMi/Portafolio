<template>
  <div class="portafolio-section section">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>portafolio</h2>
          <div class="about-tabs">
            <span 
              class="tab-item" 
              :class="all && 'active outer-shadow'" 
              @click="OnAll()">
                All
            </span>
            <span 
              class="tab-item" 
              :class="web && 'active outer-shadow'" 
              @click="OnWeb()">
                Web Application
            </span>
            <span 
              class="tab-item" 
              :class="experiments && 'active outer-shadow'" 
              @click="OnExperiments()">
                Experiments
            </span>
            <span 
              class="tab-item" 
              :class="others && 'active outer-shadow'" 
              @click="OnOthers()">
                Others
            </span>
            <span
              class="tab-item">
                <router-link to="/prueba">
                  ...
                </router-link>
                
            </span>
          </div>
        </div>
        <!-- Portafolio items-->
        <div class="row portafolio-items">
          <portafolio-item></portafolio-item>
        </div>
        <!-- Portafolio items Fin-->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import PortafolioItem from '../components/portafolio/PortafolioItem.vue'

export default {
  components: { PortafolioItem },
  setup(){
      const all = ref(true)
      const web = ref(false)
      const experiments = ref(false)
      const others = ref(false)
      provide("alls",all)
      provide("webs",web)
      provide("experiments",experiments)
      provide("others",others)

      const OnAll = () => {
          items.value = allItems
          web.value = false
          experiments.value = false
          others.value = false
          all.value = !all.value
          if(web.value == all.value);
            all.value = true
      }
      const OnWeb = () => {
        items.value = allItems.filter(item => item.odd == "web")
          web.value = !web.value
          experiments.value = false
          others.value = false
          all.value = false
          if(web.value == all.value);
            web.value = true
      }
      const OnExperiments = () => {
        items.value = allItems.filter(item => item.odd == "experiments")
          web.value = false
          experiments.value = !experiments.value
          others.value = false
          all.value = false
          if(web.value == experiments.value);
            experiments.value = true
      }
      const OnOthers = () => {
        items.value = allItems.filter(item => item.odd == "others")
          web.value = false
          experiments.value = false
          others.value = !others.value
          all.value = false
          if(web.value == others.value);
            others.value = true
      }

      const allItems=[
          {
              src:"https://media.discordapp.net/attachments/804511906735718421/830840618590142534/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f363238393635353537.png?width=527&height=382",
              title:"TODO APP VUE3 JS",
              link:"https://github.com/JCruzMi/ToDoApp",
              odd:"experiments"
          },
          {
              src:"https://media.discordapp.net/attachments/804511906735718421/830841420859310120/emotes.png?width=525&height=525",
              title:"Bot Discord Medi",
              link:"https://github.com/JCruzMi/BotDiscordMedi",
              odd:"others"
          },
          {
              src:"https://media.discordapp.net/attachments/804511906735718421/870041535276797982/unknown.png?width=644&height=656",
              title:"PokeApi",
              link:"https://github.com/JCruzMi/poke-api-vue",
              odd:"web"
          },
          {
              src:"https://media.discordapp.net/attachments/804511906735718421/830844969111126026/unknown.png?width=531&height=390",
              title:"CovidApp",
              link:"https://covidreporter.netlify.app",
              odd:"web"
          },
          {
              src:"https://media.discordapp.net/attachments/804511906735718421/830845646168653854/udkmMedi.png?width=531&height=531",
              title:"Dibujos",
              link:"https://www.instagram.com/huanmurato/",
              odd:"others"
          },
          {
              src:"https://camo.githubusercontent.com/3e0049fcab9abd60908f121364de119997df47b692538586ab01ce4d6209e7a2/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3830393930333532343436333930323735322f3835313533353738373837373939303438302f756e6b6e6f776e2e706e673f77696474683d363235266865696768743d343533",
              title:"ChatBox Streamlabs",
              link:"https://github.com/JCruzMi/TwitchStremlabs/tree/master/AvatarChatBox",
              odd:"experiments"
          },
      ]

      const items = ref(allItems)

      provide("items",items)


      return {
        all, 
        experiments, 
        web, 
        others,
        OnAll,
        OnWeb,
        OnExperiments, 
        OnOthers
      }

  }
}
</script>

<style>
.portafolio-section{
  padding: 80px 0 80px;
  min-height: 100vh;
}

.portafolio-section .about-tabs{
  padding: 60px 15px 50px;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
}

.portafolio-section .about-tabs .tab-item{
  display: inline-block;
  margin: 0 5px 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 16px;
  color : var(--text-black-600);
  text-transform:capitalize;
}

.portafolio-section .about-tabs .tab-item:hover:not(.active){
  opacity: 0.6;
}

.portafolio-section .about-tabs .tab-item.active{
  color: var(--text-salmon-700);
}

</style>