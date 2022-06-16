<template>
  <div id="log" >
    <div id="animation" v-for="message in messages" :key="message">
      <div class="meta">
        <div class="animateName" :style="{backgroundColor: message.color}">
          <div class="name">{{message.nameUser}}<span class="extra"></span></div>
          <div v-if="message.badges.length > 0">
            <span class="badges" v-for="bag in message.badges" :key="bag">
              <img
                :src="bag"
                class="badge broadcaster-icon"
              />
            </span>
          </div>
          <div class="i profile">
            <img
              class="message-Pini2911-avatar avatar"
              :src="message.userImg"
              width="26"
              height="26"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="message">
        <div id="ca" class="container-message">
          {{message.message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  messages: {
    type: Object,
  }
})


</script>

<style scoped>


#log {
  position: absolute;
  width: 98%;
  bottom: 0;
  padding: 0 10px 10px;
}

#animation {
  animation: bounceInUp 0.66s ease-in-out forwards;
}

#log > div {
  position: relative;
  padding-top: 21px;
  margin-bottom: 10px;
}


/* ===== name ===== */
#log .meta {
  top: .5rem;
  position: absolute;
  line-height: 15px;
  z-index: 1;
  font-size: 16px;
  font-weight: 800;
  width: auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

#log .meta .animateName {
  border-radius: 20px;
  padding: .3rem .3rem;
  animation: reducetime 1000ms ease-in-out forwards;
  display: flex;
  justify-content: center;
  align-items: center;
}


#log .meta .animateName .name {
  display: inline-block;
  padding: .3rem .5rem .2rem .5rem;
  border-radius: 15px;
  background-color: rgba(228, 228, 228, 0.377);
  margin-left: 2rem;
  animation: reducetime 1500ms ease-in-out forwards;
  color: #000;
}


/* ===== USERMESSAGE ===== */
#log .message {
  display: flex;
  padding-top: 10px;
  align-items: center;
  min-height: 20px;
}

#log .message .container-message {
  box-shadow: 10px 10px 10px rgba(9, 19, 20, 0.35);
  background: white;
  color: black;
  padding: 12px 12px 12px 12px;
  border-radius: 10px 10px 10px 10px;
  display: inline-block;
  font-size: 18px;
  word-break: break-word;
  opacity: 1;
  margin-left: 1rem;
  margin-top: .25rem;
}

#log .message .container-message .emote {
  background-image: none !important;
}
#log .message .container-message .emote img {
  max-width: 25px;
}

/* ==== Badgets === */

#log .meta .badges {
  border-radius: 20px;
  padding: .2rem .2rem .2rem .2rem;
  background-color: rgba(228, 228, 228, 0.377);
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 5px;
	z-index: 70;
  animation: reducetime 1500ms ease-in-out forwards;

}
#log .meta .badges > img {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: .2rem;
}

#log .meta .badges > img:last-child {
	  margin-right: 0;
}

/* objetos gorro y demas */

#log .objetos{
  position: absolute;
  top:0;
  left:0;

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

#log  .i > img {
  border-radius: 50%;
}

#log .profile{
  display: flex;
  text-align:center;
  left: 2px;
}


/* ==== Emotes ==== */

#log .message .container-message .emote {
  background-image: none !important;
}
#log .message .container-message .emote img {
  max-width: 20px;
}

@keyframes bounceInUp-data-v-97e20baa {
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
@keyframes reducetime-97e20baa {
    0% {
        width: 25px;
        opacity: 0;
        color: transparent;
      	display: None;
    }
    100% {
        opacity: 1;
        width: 100%;
    }
}


</style>
