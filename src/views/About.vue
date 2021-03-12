<template>
  <div class="about-section section">
    <div class="container">
      <div class="row">
        <div class="about-tabs">
          <span class="tab-item outer-shadow active" @click="onSkills()">Skills</span>
          <span class="tab-item" @click="onExp()">Experience</span>
          <span class="tab-item" @click="onEdu()">Education</span>
        </div>
      </div>
      <div class="row">
        <div class="skills tab-content">
          <div class="row">
            <skills v-if="ski"></skills>
            <education v-if="edu"></education>
            <experience v-if="exp"></experience>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Education from '../components/about/Education.vue'
import Experience from '../components/about/Experience.vue'
import Skills from '../components/about/Skills.vue'
export default {
  components: { Skills, Education, Experience },
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
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  color : var(--text-black-600);
  text-transform:capitalize;
}

.about-section .about-tabs .tab-item:hover:not(.active){
  opacity: 0.6;
}

.about-section .about-tabs .tab-item.active{
  color: var(--text-text-salmon-700);
  
}

.about-section .tab-content{
  flex: 0 0 100%;
  max-width: 100%;
}


</style>