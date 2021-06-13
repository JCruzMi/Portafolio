<template>
    <section>
        <CardFluid></CardFluid>
    </section>
    <section>
        <Gooey></Gooey>
    </section>
    
</template>

<script>

import CardFluid from "../components/pruebas/CardFluid.vue"
import Gooey from "../components/pruebas/Gooey.vue"

export default {
  components: { CardFluid, Gooey },

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