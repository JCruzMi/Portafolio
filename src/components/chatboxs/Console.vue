<template>
  <div id="log" class="sl__chat__layout">
    <div data-from="ellisonfire" id="animation">
      <div class="meta">
        <div class="animateName">
          <div class="name">ellisonfire<span class="extra"></span></div>
          <span class="badges"
            ><img
              src="https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/1"
              class="badge subscriber-icon"
          /></span>
        </div>
        <div class="circles">
          <div class="circle circle-red"></div>
          <div class="circle circle-yellow"></div>
          <div class="circle circle-green"></div>
        </div>
      </div>
      <div class="message">
        <div id="ca" class="container-message">
          SimulationCraft and Pawn
        </div>
      </div>
    </div>

    <div data-from="Undeviginti19" id="animation">
      <div class="meta">
        <div class="animateName">
          <div class="name">Undeviginti19<span class="extra"></span></div>
          <span class="badges"></span>
        </div>
        <div class="circles">
          <div class="circle circle-red"></div>
          <div class="circle circle-yellow"></div>
          <div class="circle circle-green"></div>
        </div>
      </div>
      <div class="message">
        <div id="ca" class="container-message">
          He can still win this one
        </div>
      </div>
    </div>

    <div data-from="moltenb" id="animation">
      <div class="meta">
        <div class="animateName">
          <div class="name">moltenb<span class="extra"></span></div>
          <span class="badges"
            ><img
              src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"
              class="badge broadcaster-icon"
          /></span>
        </div>
        <div class="circles">
          <div class="circle circle-red"></div>
          <div class="circle circle-yellow"></div>
          <div class="circle circle-green"></div>
        </div>
      </div>
      <div class="message">
        <div id="ca" class="container-message">
          pog
        </div>
      </div>
    </div>
    <div data-from="locoroco0o" id="animation">
      <div class="meta">
        <div class="animateName">
          <div class="name">locoroco0o<span class="extra"></span></div>
          <span class="badges"
            ><img
              src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"
              class="badge broadcaster-icon"
          /></span>
        </div>
        <div class="circles">
          <div class="circle circle-red"></div>
          <div class="circle circle-yellow"></div>
          <div class="circle circle-green"></div>
        </div>
      </div>
      <div class="message">
        <div id="ca" class="container-message">
          never lucky!
        </div>
      </div>
    </div>
    <div data-from="moltenb" id="animation">
      <div class="meta">
        <div class="animateName">
          <div class="name">moltenb<span class="extra"></span></div>
          <span class="badges"
            ><img
              src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"
              class="badge broadcaster-icon"
          /></span>
        </div>
        <div class="circles">
          <div class="circle circle-red"></div>
          <div class="circle circle-yellow"></div>
          <div class="circle circle-green"></div>
        </div>
      </div>
      <div class="message">
        <div id="ca" class="container-message">
          pog
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#log {
  position: relative;
  width: 100%;
  bottom: 0;
  top: 2rem;
  padding: 0 10px 10px;
}
#log > div {
  position: relative;
  padding-top: 21px;
  margin-bottom: 10px;
}

#animation {
  position: relative;
  padding-top: 21px;
  margin-bottom: 10px;
  animation: bounceInUp 0.66s ease-in-out forwards;
}
/* ===== name ===== */
#log .meta {
  top: 0;
  position: absolute;
  line-height: 15px;
  z-index: 1;
  font-size: 20px;
  font-weight: 800;
  width: auto;
  display: flex;
  background: rgba(24, 30, 36, 0.8);
  border-radius: 10px 10px 0px 0px;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

#log .meta .animateName {
  padding: 0.3rem 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#log .meta .animateName .name {
  display: inline-block;
  padding: 0.3rem 0.5rem 0.2rem 0.5rem;
}

#log .meta .circle {
  height: 8px;
  width: 8px;
  display: inline-block;
  border-radius: 50%;
  background-color: white;
}
#log .meta .circles {
  margin: 5px 11px;
  display: flex;
  gap: 3px;
}

/* ===== USERMESSAGE ===== */
#log .message {
  display: flex;
  padding-top: 10px;
  align-items: center;
  min-height: 20px;
}

#log .message .container-message {
  background: rgba(24, 30, 36, 0.8);
  color: white;
  padding: 12px 12px 12px 12px;
  border-radius: 0px 0px 10px 10px;
  display: inline-block;
  font-size: 18px;
  word-break: break-word;
  opacity: 1;
  min-width: 100%;
  display: inline-table;
  max-width: 94%;
}

.message {
  overflow-y: hidden;
  overflow-x: hidden;
}

#log .message .container-message .emote {
  background-image: none !important;
  margin-top: 5px;
}
#log .message .container-message .emote img {
  min-width: 30px;
}

/* ==== Badgets === */

#log .meta .badges {
  border-radius: 20px;
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 5px;
  z-index: 70;
}
#log .meta .badges > img {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 0.2rem;
}

#log .meta .badges > img:last-child {
  margin-right: 0;
}

/* ===== Image ===== */

#log .i {
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  z-index: 100;
  background-color: white;
}

#log .i > img {
  border-radius: 50%;
}

#log .profile {
  display: flex;
  text-align: center;
  left: 2px;
}

/* ==== Emotes ==== */

#log .message .container-message .emote {
  background-image: none !important;
}
#log .message .container-message .emote img {
  max-width: 20px;
}

@keyframes bounceInUp-data-v-a102e4d0 {
  0% {
    opacity: 0;
    transform: translateY(50vh);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
