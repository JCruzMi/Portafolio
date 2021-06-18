<template>
    <div class="stage-wrapper">
        <div class="effect effect-5"></div>
        <div class="effect effect-5"></div>
        <div class="effect effect-5"></div>
    </div>
    <div class="stage-wrapper">
        <div class="effect effect-6"></div>
        <div class="effect effect-6"></div>
        <div class="effect effect-6"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.stage-wrapper{
    width: 45%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-black-50);
    filter: blur(10px) contrast(30);
}

.effect-5{
  width: 100px;
  height: 100px;
  background: var(--bg-black-900);
  display: inline-block;
  transform: rotate(45deg);
  animation: goevy 5s ease-in-out infinite;
}

.effect-6{
  width: 100px;
  height: 100px;
  background: var(--bg-black-900);
  display: inline-block;
  border-radius: 50%;
  animation: goevy 5s ease-in-out infinite;
}


@keyframes goevy {
  0%,100%{
    margin: 10px;
  }
  50%{
    margin: -50px;
  } 
}

</style>