<template>
  <div class="about-section section">
    <div class="container">
      <div class="row">
        <div class="about-tabs">
          <span class="tab-item" :class="ski && 'active outer-shadow'" @click="onSkills()">Skills</span>
          <span class="tab-item" :class="exp && 'active outer-shadow'" @click="onExp()">Experience</span>
          <span class="tab-item" :class="edu && 'active outer-shadow'" @click="onEdu()">Education</span>
        </div>
      </div>
      <transition 
        enter-active-class="animate__animated animate__fadeInLeft" 
        mode="out-in"  
      >
      <div class="row"  v-if="ski">
        <div class="skills tab-content">
          <div class="row">
            <Skillsl />
          </div>
        </div>
      </div>
      </transition>
      <transition 
        enter-active-class="animate__animated animate__fadeInLeft" 
        mode="out-in"  
      >
      <div class="row" v-if="exp">
        <div class="experience tab-content">
          <div class="row">
            <experience></experience>
          </div>
        </div>
      </div>
      </transition>
      <transition 
        enter-active-class="animate__animated animate__fadeInLeft" 
        mode="out-in"  
      >
      <div class="row" v-if="edu">
        <div class="education tab-content">
          <div class="row">
            <education></education>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Education from '../components/about/Education.vue'
import Experience from '../components/about/Experience.vue'
import Skillsl from '../components/about/Skills.vue'

export default {
  components: { Skillsl, Education, Experience },
  setup(){
      const ski = ref(true)
      const exp = ref(false)
      const edu = ref(false)
      const onSkills = () => {
          exp.value = false
          edu.value = false
          ski.value = !ski.value
          if(exp.value == ski.value);
            ski.value = true
      }
      const onEdu = () => {
          ski.value = false
          exp.value = false
          edu.value = !edu.value
          if(exp.value == edu.value);
            edu.value = true
      }
      const onExp = () => {
          ski.value = false
          edu.value = false
          exp.value = !exp.value
          if(exp.value == edu.value);
            exp.value = true
      }

      return {ski, exp, edu ,onSkills,onEdu,onExp}

  }
}
</script>

<style>

.about-section{
  padding: 50px 0 0;
  min-height: 100vh;
}

/**Contenedor Skills-exp-edu */

.about-section .about-tabs{
  padding: 60px 15px 50px;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center;
}

.about-section .about-tabs .tab-item{
  display: inline-block;
  margin: 0 5px 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 16px;
  color : var(--text-black-600);
  text-transform:capitalize;
}

.about-section .about-tabs .tab-item:hover:not(.active){
  opacity: 0.6;
}

.about-section .about-tabs .tab-item.active{
  color: var(--text-salmon-700);
}
/**Fin Contenedor Skills-exp-edu */

/**Contenido about */

.about-section .tab-content{
  flex: 0 0 100%;
  max-width: 100%;
}

.about-section .skills{
  padding-bottom: 50px;
}

.about-section .experience{
  padding-bottom: 50px;
}

.about-section .education{
  padding-bottom: 50px;
}
</style>