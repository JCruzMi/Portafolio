<template>
    <div class="container">
        <div class="search inner-shadow">
           <div class="input">
                <i class="fas fa-search"></i>
               <input class="searc" v-model="user" placeholder="User name">
           </div>
        <button class="btn-1 outer-shadow" @click="getDataUser">Search</button>
        </div>
        <div class="info outer-shadow">
            <img :src="dataUser.avatar_url">
            <h2>{{dataUser.login}}</h2>
            <span>{{dataUser.created_at.substring(0,10)}}</span>
            {{dataUser}}

        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue'


    const user = ref("")

    const dataUser = ref([])

    const getDataUser = () =>{
        user.value = user.value.split(" ").join("")
        fetch("https://api.github.com/users/"+user.value).then((res) => res.json())
        .then((data) => dataUser.value = data)
    }

</script>

<style scoped>

.container{
    padding: 1rem;
    width: 700px;
}

.search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .25rem .5rem;
    border-radius: 1rem
}


.searc {
    margin-left: 1rem;
    width: 300px;
    padding: 1rem;
    border-radius: 10px;
    background-color: transparent;
    border: 0 solid;
}

.input{
    color : var(--text-black-600);
}

.input i{
    padding-left: .5rem;
    padding-right: -1rem;
}

input{
    color: var(--text-salmon-700);
    padding-left: 0rem;
    font-size: 18px;
}

.btn-1{
    border-radius: 10px;
}

.info{
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 10px;

}
</style>>
