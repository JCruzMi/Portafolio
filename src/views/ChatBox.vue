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
        <Ryumi v-if="selected=='ryumi'" />
        <Console v-if="selected=='console'" />

      </div>
    </div>
  </div>
</template>

<script setup>

import Ryumi from '@/components/chatboxs/Ryumi'
import Console from '@/components/chatboxs/Console'

import { ref } from 'vue'

const list = [
    {
        nombre:"ryumi",
    },
    {
        nombre:"console",
    }
    ]

const selected = ref("")

function select (name){
    selected.value=name
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
}

</style>