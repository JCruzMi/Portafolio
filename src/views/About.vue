<template>
  <div class="about-section section">
    <div class="container">
      <div class="row">
        <div class="about-tabs">
          <span class="tab-item outer-shadow active">Skills</span>
          <span class="tab-item">Experience</span>
          <span class="tab-item">Education</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
  }
}
</script>

<style>
.about-section{
  padding: 80px 0 80px;
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

</style>