<template>
  <div v-for="item in items" :key="item.name" class="skill-item">
    <p>{{item.name}}</p>
    <div class="progress inner-shadow">
      <div class="progress-bar" :style="item.width">
        <span>{{item.percent}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    return{
      items : [
        {name: 'Python', percent: '90%',width: {width: 'calc(90% - 14px)'}},
        {name: 'Kotlin', percent: '80%',width: {width: 'calc(80% - 14px)'}},
        {name: 'Javascript', percent: '67%',width: {width: 'calc(67% - 14px)'}},
        {name: 'Ruby', percent: '60%',width: {width: 'calc(60% - 14px)'}},
        {name: 'PotgreSQL', percent: '70%',width: {width: 'calc(70% - 14px)'}},
        {name: 'Oracle', percent: '70%',width: {width: 'calc(70% - 14px)'}},
        {name: 'MongoDB', percent: '50%',width: {width: 'calc(50% - 14px)'}},
        {name: 'Firebase', percent: '80%',width: {width: 'calc(80% - 14px)'}},
        {name: 'Git', percent: '70%',width: {width: 'calc(70% - 14px)'}},
        {name: 'Vue js', percent: '90%',width: {width: 'calc(90% - 14px)'}},
        {name: 'React', percent: '50%',width: {width: 'calc(50% - 14px)'}},
        {name: 'HTML', percent: '80%',width: {width: 'calc(80% - 14px)'}},
        {name: 'CSS', percent: '85%',width: {width: 'calc(85% - 14px)'}},
        ]
    }
  }
}
</script>

<style>
.skill-item{
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
  margin-bottom: 40px;
}

.skill-item p{
  font-size: 16px;
  color: var(--text-black-600);
  text-transform: capitalize;
  margin: 0 0 10px;
}

.skill-item .progress{
  height: 20px;
  border-radius: 10px;
  position: relative;
}

.skill-item .progress-bar{
  background-color: var(--text-black-600);
  height: 6px;
  left: 7px;
  top: 7px;
  position: absolute;
  border-radius: 10px;
}

.skill-item .progress-bar span{
  position: absolute;
  right: 0;
  top: 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-black-600);
  margin-top: -40px;
}

</style>