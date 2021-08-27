<template>
    <section>
        <CardFluid></CardFluid>
    </section>
    <section>
        <Gooey></Gooey>
    </section>
    <section>
        <Weater></Weater>
    </section>
</template>

<script>

import CardFluid from "../components/pruebas/CardFluid.vue"
import Naty from "./Naty.vue"
import Gooey from "../components/pruebas/Gooey.vue"
import Weater from "../components/pruebas/Weater.vue"

export default {
  components: { CardFluid, Naty, Gooey, Weater },

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