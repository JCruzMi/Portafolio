<template>
  <div id="chatbox" class="chatbox-section section">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2> ChatBox TWitch </h2>
        </div>
      </div>
      <div class="row chatbox">
        <!-- Items -->
        <div class="chatbox-item" v-for="item in list" :key="item">
            <div @click="select(item.nombre)">
                {{item.nombre}}
            </div>
        </div>
      </div>
      <!-- Fin Items -->
      <div class="chat">
        <Ryumi :messages="messages" v-if="selected=='ryumi'" />
        <Console :messages="messages" v-if="selected=='console'" />
        <Aki :messages="messages" v-if="selected=='aki'" />
        <Glass :messages="messages" v-if="selected=='glass'" />
        <Vyre :messages="messages" v-if="selected=='vyre'" />
      </div>
      <div class="chat-wrapper">

        <textarea v-model="message"></textarea>
        <button class="btn btn-1 outer-shadow" @click="send">mandar</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import Ryumi from '@/components/chatboxs/Ryumi'
import Console from '@/components/chatboxs/Console'
import Aki from '@/components/chatboxs/Aki'
import Glass from '@/components/chatboxs/Glass'
import Vyre from '@/components/chatboxs/Vyre'

import { ref } from 'vue'

const messages = ref([
  {
   nameUser: "test2",
   userImg: "https://miregion360.com/wp-content/uploads/2018/02/Burra-con-mo%C3%B1o.jpg",
   message: "dsadsad asd asd asdas",
   badges: ["https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/1"],
   color: "blue" 
  },
  {
   nameUser: "test1",
   userImg: "https://miregion360.com/wp-content/uploads/2018/02/Burra-con-mo%C3%B1o.jpg",
   message: "a",
   badges: ["https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"],
   color: "yellow" 
  },
  {
   nameUser: "test3",
   userImg: "https://miregion360.com/wp-content/uploads/2018/02/Burra-con-mo%C3%B1o.jpg",
   message: "aaaaaaaaa",
   badges: ["https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/1"],
   color: "red" 
  }
])

const message = ref("")

const list = [
    {
      nombre:"ryumi",
    },
    {
      nombre:"console",
    },
    {
      nombre:"aki",
    },
    {
      nombre:"glass",
    },
    {
      nombre:"vyre",
    }
    ]

const selected = ref("")

function select (name){
  selected.value=name
}

function send (){
  if(message.value!=""){

    const data = {
      nameUser: "usuario",
    userImg: "https://miregion360.com/wp-content/uploads/2018/02/Burra-con-mo%C3%B1o.jpg",
    message: message.value,
    badges: [],
    color: "#000" 
    }
    messages.value.push(data)
    message.value = ""
  }
}

</script>

<style scoped>
.chatbox-section{
  padding: 80px 0 80px;
  min-height: 100vh;
}

.chatbox{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
    
}

.chatbox-item{
    width: 160px;
    text-align: center;
    background: white;
    cursor: pointer;
}

.chat{
    margin-top: 1rem;
    padding: 1rem;
    padding-top: 0rem;
    padding-bottom: 3rem;
    border-radius: 20px;
    background-color: var(--bg-black-100);
    overflow-y: hidden;
    height: 600px;
    position: relative;
}

.chat-wrapper {
  width: 100%;
  margin-top: 1rem;
  display: flex;
}

textarea {
  resize: none;
  box-sizing: border-box;
  height: auto;
  min-height: 41px;
  width: 100%;
  border: 1px solid #e4e7ec;
  border-radius: 20px;
  background-color: #f9fafb;
  outline: none;
  padding: 0 24px 0 24px;
  overflow: hidden;
  margin-right: 1rem;
}

</style>