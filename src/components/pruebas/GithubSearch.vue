<template>
    <div class="container">
        <div class="search inner-shadow">
           <div class="input">
                <i class="fas fa-search"></i>
                <input class="searc" type="text" v-model="user" placeholder="User name">
           </div>
        <button class="btn-1 outer-shadow" @click="getDataUser">Search</button>
        </div>
        <div class="info outer-shadow">
            <div class="flex">
                
                <img :src="dataUser.avatar_url">
                
                <div class="data">
                    <div class="name">
                        <h2>{{dataUser.name}}</h2>
                        <div>{{dataUser.created_at.substring(0,10).split("-").join(" ")}}</div>
                    </div>
                    <a :href="dataUser.html_url"><i class="fab fa-github"></i>{{dataUser.name}}</a>
                    <p class="bio">{{dataUser.bio}}</p>

                    <div class="info name inner-shadow">
                        <div class="text">
                            <span>repos</span>
                            <span>{{dataUser.public_repos}}</span>
                        </div>
                        <div class="text">
                            <span>followers</span>
                            <span>{{dataUser.followers}}</span>
                        </div>
                        <div class="text">
                            <span>following</span>
                            <span>{{dataUser.following}}</span>
                        </div>
                    </div>
                    <div class="name">
                        <span><i class="fas fa-map-marker"></i> {{ dataUser.location}}</span>
                        <span><i class="fas fa-building"></i> {{ dataUser.company}}</span>
                    </div>
                    <div class="name">
                        <a target="_blank" :href="'https://twitter.com/'+dataUser.twitter_username" v-if="dataUser.twitter_username!='Not Avaliable'">
                        <span ><i class="fab fa-twitter"></i> {{ dataUser.twitter_username}}</span>
                        </a>
                        <span v-if="dataUser.twitter_username=='Not Avaliable'"><i class="fab fa-twitter"></i> {{ dataUser.twitter_username}}</span>
                        <span><i class="fas fa-envelope"></i> {{ dataUser.email}}</span>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue'

    const user = ref("JCruzMi")

    const dataUser = ref([])

    const info = {
        name: "",
        avatar_url: "This profile has no avatar",
        created_at: "",
        html_url: "",
        bio: "This profile has no bio",
        public_repos: "",
        followers: "",
        following: "",
        location: "Not Avaliable",
        company: "Not Avaliable",
        twitter_username: "Not Avaliable",
        email: "Not Avaliable"
    }

    onMounted(() => {
        getDataUser()
    })
 
    const getDataUser = () =>{
        user.value = user.value.split(" ").join("")
        if(user.value.length == 0){
            user.value = "JCruzMi"
        }
        fetch("https://api.github.com/users/"+user.value).then((res) => res.json())
        .then((data) => {
            let refData = {}
            for(var key in info){
                if(data[key]!=null){
                    refData[key]=data[key]
                    
                } else {
                    refData[key]=info[key]
                }
            }

            dataUser.value = refData
        })
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



input{
    margin-left: 1rem;
    padding: 1rem;
    border-radius: 10px;
    background-color: transparent;
    border: 0 solid;
    display: inline-flex;
    min-width: auto;
    max-width: auto;

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

.bio{
    margin-top:1rem;
    color: var(--text-salmon-700);
}

.btn-1{
    border-radius: 10px;
}

.data{
    width: 100%;
}

.info{
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 10px;
}

.info img{
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-bottom: 1rem;
}

.flex{
    display: flex;
    align-items: stretch;
    gap: 1rem;
}

.name:first-child{
    color : var(--text-black-900);
}

.name{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    color: var(--text-black-600);
}

.text span{
    display: block;
    color : var(--text-black-900);
}

i{
    margin-right: .5rem;
}

@media (max-width: 560px) {
    .flex{
        display: block;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 450px) {
    .input i{
        display:None;
    }
    .searc{
        margin-left: 0;
        width: 100%;
    }
}

@media (max-width: 370px) {
    .name{
        display: block;
    }
    span{
        display: block;
    }
    .data{
        text-align: center;
    }
    .info img{
        margin-left: 25%;
    }   

}


</style>>
