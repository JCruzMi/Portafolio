<template>
  <div id="log">
    <div id="animation" v-for="message in messages" :key="message">
        <div class="message">
          <div class="pic">
            <div class="i">
              <img width="68" height="68" alt="" />
            </div>
          </div>
          <div id="ca" class="container-message bubble large left">
            <div class="meta">
              <div v-if="message.badges.length > 0">
                <span class="badges" v-for="bag in message.badges" :key="bag">
                  <img :src="bag" class="badge" />
                </span>
              </div>
              <span class="name">{{ message.nameUser }}</span>
            </div>
            {{ message.message }}
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    type: Object,
  },
});
</script>

<style scoped>

#log {
  position: absolute;
  width: 98%;
  bottom: 0;
  padding: 0 10px 10px;
}

#animation {
  animation: bounceInUp 0.7s ease-in-out forwards;
}

#log>div { 
  position: relative;
  padding-top: 21px;
  margin-bottom: 10px; 
}

/* ===== USERNAME ===== */
#log .meta {
  position: relative;
  top: -10px;
  left: 0px;
  line-height: 15px;
  z-index: 1;
}

#log .meta .badges {
  float: right;
  margin-top: 4px;
  margin-left: 5px;
  align-items: center;
}
#log .meta .badges > img {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}
#log .meta .badges > img:last-child {
  margin-left: 5px;
}
#log .meta .name {
  top:0;
  position: relative;
  width: 100%;
  line-height: 21px;
  font-weight: 900;
  font-size: 18px;
}

/* ===== USERMESSAGE ===== */
#log .message {
  display: flex;
  position: relative;
  padding-top: 0px;
  align-items: flex-end;
  min-height: 20px;
}

.bubble {
  position: relative;
  display: block;
  margin-left: 12px;
  text-align: center;
  font-size: 12px;
  line-height: 1.3em;
  background-color: #162b4e;
  color: #ffffff;
  padding: 20px 6px 6px 6px;
  box-shadow: 0 -4px #162b4e, 0 -8px #162b4e, 4px 0 #162b4e, 4px -4px #162b4e,
    8px 0 #162b4e, 0 4px #162b4e, 0 8px #162b4e, -4px 0 #162b4e,
    -4px 4px #162b4e, -8px 0 #162b4e, -4px -4px #162b4e, 4px 4px #162b4e;
  box-sizing: border-box;
}
.bubble::after {
  content: "";
  display: block;
  position: absolute;
  box-sizing: border-box;
}
.bubble.shadow {
  box-shadow: 0 -4px #162b4e, 0 -8px #162b4e, 4px 0 #162b4e, 4px -4px #162b4e,
    8px 0 #162b4e, 0 4px #162b4e, 0 8px #162b4e, -4px 0 #162b4e,
    -4px 4px #162b4e, -8px 0 #162b4e, -4px -4px #162b4e, 4px 4px #162b4e,
    4px 12px rgba(0, 0, 0, 0.1), 12px 4px rgba(0, 0, 0, 0.1),
    8px 8px rgba(0, 0, 0, 0.1);
}

.bubble.large {
  min-width: 178px;
  max-width: auto;
  text-align: left;
}

.bubble.left::after {
  height: 4px;
  width: 4px;
  bottom: -4px;
  left: -8px;
  background: #162b4e;
  box-shadow: -4px -4px #162b4e, -4px 0 #162b4e, -8px 0 #162b4e, 0 -8px #162b4e,
    -4px 4px #162b4e, -8px 4px #162b4e, -12px 4px #162b4e, -16px 4px #162b4e,
    -12px 0 #162b4e, -8px -4px #162b4e, -4px -8px #162b4e, 0 -4px #162b4e,
    4px 4px #162b4e, 0px 4px #162b4e;
}

#log .message .container-message {
  display: block;
  font-size: 18px;
  word-break: break-word;
  margin-left: 10px;
  max-width: 96%;
  width: auto;
}

#log .message .container-message .emote {
  background-image: none !important;
}
#log .message .container-message .emote img {
  max-width: 25px;
}

/* ===== Image ===== */

.pic {
  display: flex;
  bottom: 0;
  position: relative;
  height: auto;
  border: none;
  width: 68px;
}

#log .message .pic .i {
  position: relative;
  display: inline-block;
  margin-right: 4px;
  border: none;
  background: url("https://media.discordapp.net/attachments/945655172422574140/945811290016858123/unknown.png")
    no-repeat;
}
</style>
