<template>
  <div id="log" >
    <div id="animation" v-for="message in messages" :key="message">
      <div class="meta">
        
        <div class="animateName" >
          <div class="name">{{message.nameUser}}<span class="extra"></span></div>  
        </div>
      </div>
      <div class="message">
        <div id="ca" class="container">
          <div class="container-message">
            
            {{message.message}}
          </div>
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


#log > div {
  animation: bounceInUp 0.66s ease-in-out forwards;
}


.colon { 
  display: none; 
}

#log {
  position: absolute; 
  width: 100%;
  bottom: 0; 
  left: 0; 
  padding: 0 10px 10px;
}


/* ===== USERNAME ===== */
#log .meta {
  position: absolute; 
  display: flex;
  top: 0px; 
  align-items: center;
  justify-content: center; 
  width: 100%;
  animation: gelatine 2s ease 1;
  z-index: 99;
  text-transform: uppercase;
}


#log .meta .name {
  margin-top: .5rem;
  background-color: #212121;
  border-radius: 20px;
  color: #f4f4f4;
  padding: 10px 12px; 
  line-height: 15px; 
  z-index: 1;
  font-size: 14px;
  font-weight: 600;
  width: auto;
  letter-spacing: 2px
}

/* ===== USERMESSAGE ===== */
#log .message {
  display: flex;
  width: 100%;
  align-items: center;
  min-height: 20px;
}

#log .message .container {
	  width: 100%;
    border: 2px solid rgba( 255, 255, 255, .4 );
    border-radius: 1px;
  	background: rgba( 255, 255, 255, 0.18 );
  	backdrop-filter: blur( 4px );
}

#log .message .container-message {
	color: #212121;
  width: 100%;
  padding: 15px 18px 15px 18px;
  margin-top: .5rem;
  display: inline-block;
  font-size: 18px; 
  word-break: break-word;
  background: rgba( 255, 255, 255, 0.18 );
  backdrop-filter: blur( 7px );
}

#log .message .container-message .emote {
  background-image: none !important;
}
#log .message .container-message .emote img {
  max-width: 20px;
}


@keyframes gelatine {
  0% { 
    transform: scale(1, 1); 
  } 
  25% { 
    transform: scale(0.9, 1.1); 
  }
  50% { 
    transform: scale(1.1, 0.9); 
  }
  75% { 
    transform: scale(0.95, 1.05); 
  }
}


@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% { transform: scale(.9); }
  100% { transform: scale(1); }
}


</style>
