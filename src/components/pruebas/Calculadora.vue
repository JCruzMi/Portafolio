<template>
    <div class="container">
        <div class="calculadora">
        
        <div class="data">
            <p class="valor">{{getOperation.toString()}}</p>
            <p class="vista">{{getResult.toString().substring(getResult.length-9, getResult.length)}}</p>
        </div>

        <div class="grid">
            <button class="AC simbol outer-shadow hover-in-shadow" @click="clickAc()">AC</button>
            <button class="simbol resl outer-shadow hover-in-shadow" @click="clickDEL()">DEL</button>
            <button class="simbol outer-shadow hover-in-shadow" @click="click('/')">/</button>

            <button class="outer-shadow hover-in-shadow" @click="click('7')">7</button>
            <button class="outer-shadow hover-in-shadow" @click="click('8')">8</button>
            <button class="outer-shadow hover-in-shadow" @click="click('9')">9</button>
            <button class="simbol outer-shadow hover-in-shadow" @click="click('x')">x</button>

            <button class="outer-shadow hover-in-shadow" @click="click('4')">4</button>
            <button class="outer-shadow hover-in-shadow" @click="click('5')">5</button>
            <button class="outer-shadow hover-in-shadow" @click="click('6')">6</button>
            <button class="simbol outer-shadow hover-in-shadow" @click="click('-')">-</button>

            <button class="outer-shadow hover-in-shadow" @click="click('1')">1</button>
            <button class="outer-shadow hover-in-shadow" @click="click('2')">2</button>
            <button class="outer-shadow hover-in-shadow" @click="click('3')">3</button>
            <button class="simbol outer-shadow hover-in-shadow" @click="click('+')">+</button>

            <button class="AC outer-shadow hover-in-shadow" @click="click('0')">0</button>
            <button class="outer-shadow hover-in-shadow" @click="click('.')">.</button>
            <button class="simbol outer-shadow hover-in-shadow" @click="clickResult()">=</button>
            

        </div>

    </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue'

    const data = 0

    const getOperation = ref(0)
    const getResult = ref(0)


    function click(par){
        if(getResult.value == "0"){
            getResult.value = par
        } else {
            getResult.value += par
        }
    }

    function clickAc(){
        getResult.value = "0"
        getOperation.value = ""
    }

    function clickDEL(){
        if(getResult.value.length > 1){
            getResult.value = getResult.value.substring(0, getResult.value.length - 1)
        } else {
            getResult.value = "0"
        }
    }

    function clickResult(){
        let operation = getResult.value
        getOperation.value = operation
        operation = operation.replace("x", "*")

        getResult.value = eval(operation)

    }

</script>

<style scoped>


.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}   

.calculadora{
    max-height: 100vh;
    width: 45%;
}

.data{
    text-align: right;
    padding: 1rem 1rem;
    background-color: var(--bg-black-900);
    border-radius: 0.5rem;
    color: var(--bg-black-100);
    margin: 1rem;
}

.data .valor{
    font-size: 3vw;
    font-weight: 600;
    word-wrap: break-word;
}

.data .vista{
    font-size: 6vw;
    font-weight: bold;
    word-wrap: break-word;
}

.grid{
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    background-color: var(--bg-black-50);
    grid-gap: 1rem;
}

button {
    border: 0px;
    font-size: 1.7rem;
    line-height: 1.75rem;
    height: 3rem;
    color: var(--text-salmon-700);
    font-weight: 600;
    background-color: var(--bg-black-50);
    border-radius: 10px;
}

button:after {
    border-radius: 10px;
}


.AC{
    grid-column: 1 / 3;
}


.resl{
    font-size: 14px;
}

.simbol{
    color: var(--bg-black-900);
}

@media (max-width: 760px) {
    .calculadora{
        width: 80%;
    }
}

@media (max-width: 440px) {
    .calculadora{
        width: 90%;
    }
}

</style>