<template>
  <div class="portafolio-section section">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2> portafolio</h2>
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
import { ref } from 'vue'
import PortafolioItem from '../components/portafolio/PortafolioItem.vue'

export default {
  components: { PortafolioItem },
  setup(){
      const all = ref(true)
      const web = ref(false)
      const experiments = ref(false)
      const others = ref(false)
      const OnAll = () => {
          web.value = false
          experiments.value = false
          others.value = false
          all.value = !all.value
          if(web.value == all.value);
            all.value = true
      }
      const OnWeb = () => {
          web.value = !web.value
          experiments.value = false
          others.value = false
          all.value = false
          if(web.value == all.value);
            web.value = true
      }
      const OnExperiments = () => {
          web.value = false
          experiments.value = !experiments.value
          others.value = false
          all.value = false
          if(web.value == experiments.value);
            experiments.value = true
      }
      const OnOthers = () => {
          web.value = false
          experiments.value = false
          others.value = !others.value
          all.value = false
          if(web.value == others.value);
            others.value = true
      }

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