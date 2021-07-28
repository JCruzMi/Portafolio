<template>
    <section>
        <CardFluid></CardFluid>
    </section>
    <section>
        <Naty></Naty>
    </section>
    
</template>

<script>

import CardFluid from "../components/pruebas/CardFluid.vue"
import Naty from "./Naty.vue"

export default {
  components: { CardFluid, Naty },

}
</script>

<style scoped>

section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}


</style>