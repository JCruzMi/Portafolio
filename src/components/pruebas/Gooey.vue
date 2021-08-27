<template>
  <section class="bannerMedi">
      <div class="containe">
          <div id="scene">
              <h2 id=text>
                  <span data-depth-y="3">M</span>
                  <span data-depth-y="-6">E</span>
                  <span data-depth-y="5">D</span>
                  <span data-depth-y="-7">I</span>
              </h2>
          </div>
      </div>
  </section>
</template>

<script>

import { onMounted } from 'vue'

export default {
    setup(){

        onMounted(() => {
            var text = document.getElementById('text')
        
            var parallaxInstance = new Parallax(text)
        })
        
    }
}
</script>

<style>

.bannerMedi{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.bannerMedi .containe{
    position: absolute;
    width: 100%;
    height: 100vh;
}


.bannerMedi .containe #scene{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.bannerMedi .containe #scene #text{
    position: absolute;
    display: flex;
    color: var(--bg-black-900);
    font-size: 14vw;
    z-index: 98;
}

.bannerMedi .containe #scene #text span{
    position: relative !important;
    display: inline-block;
    text-shadow: 1px 1px 0 var(--text-black-600),
    2px 2px 0 var(--text-black-600),
    3px 3px 0 var(--text-black-600),
    4px 4px 0 var(--text-black-600),
    5px 5px 0 var(--text-black-600),
    6px 6px 0 var(--text-black-600),
    7px 7px 0 var(--text-black-600),
    8px 8px 0 var(--text-black-600),
    25px 35px 0 rgba(0, 0, 0, 0.1)
    ;
}


</style>