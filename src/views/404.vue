<template>
  <section class="banner">
      <div class="containe">
          <div id="scene">
              <h2 class="text" id=text>
                  <span data-depth-y="3">4</span>
                  <span data-depth-y="-6">0</span>
                  <span data-depth-y="5">4</span>
              </h2>
          </div>
          
      </div>
      <div class="containe">
          <div id="scene">
              <h2 class="text" id=text2>
                  <span data-depth-y="3">N</span>
                  <span data-depth-y="-6">O</span>
                  <span data-depth-y="5">T</span>
              </h2>
          </div>
      </div>
      <div class="containe">
          <div id="scene">
              <h2 class="text" id=text3>
                  <span data-depth-y="5">F</span>
                  <span data-depth-y="-6">O</span>
                  <span data-depth-y="4">U</span>
                  <span data-depth-y="-3">N</span>
                  <span data-depth-y="6">D</span>

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
            var text2 = document.getElementById('text2')
            var text3 = document.getElementById('text3')

        
            var parallaxInstance = new Parallax(text)
            var parallaxInstance = new Parallax(text2)
            var parallaxInstance = new Parallax(text3)

        })
        
    }
}
</script>

<style>

.banner{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.banner .containe{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: radial-gradient(var(--bg-black-100), var(--bg-black-50))
}


.banner .containe:nth-child(1) #scene{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
}

.banner .containe:nth-child(2) #scene{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.banner .containe:nth-child(3) #scene{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
}

.banner .containe #scene .text{
    position: absolute;
    display: flex;
    color: var(--bg-black-900);
    font-size: 14vw;
    z-index: 98;
}

.banner .containe:nth-child(2) #scene .text{
    font-size: 5vw;
}

.banner .containe #scene .text span{
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