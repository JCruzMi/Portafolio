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
    <section>
        <Calculadora></Calculadora>
    </section>
    <section>
        <Social></Social>
    </section>
    <section>
        <Search></Search>
    </section>
</template>

<script>

import CardFluid from "../components/pruebas/CardFluid.vue"
import Gooey from "../components/pruebas/Gooey.vue"
import Weater from "../components/pruebas/Weater.vue"
import Calculadora from "../components/pruebas/Calculadora.vue"
import Social from "../components/pruebas/Socials.vue"
import Search from "../components/pruebas/GithubSearch.vue"


export default {
  components: { CardFluid, Gooey, Weater, Calculadora, Social, Search },

}
</script>

<style scoped>

section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}


</style>