<template>
  <div class="outer-shadow card">
    <div class="followers">
        <i :class="props.icon" ></i>
        {{props.name}}
    </div>
    <div class="val">
        {{props.val}}
    </div>
    <span class="followers">FOLLOWERS</span>
  </div>
</template>

<script setup>

    import { defineProps } from 'vue'

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
        name : {
            type: String,
            required: true,
        },
        val: {
            type: String,
            required: true,
        },
        more: {
            type: String,
            required: true,
        }
    })

</script>

<style scoped>

.card{
    padding: 1rem 3rem;
    text-align: center;
}

.val{
    font-size: 3vw;
    font-weight: 600;
    color: var(--bg-black-900);
    padding-top: 1rem;
}

.followers{
    color: gray;
}

.followers i{
    padding-right: 1rem;
}

.data{
    padding-top: 1rem;
}

.Facebook{
    color: #3b5998 ;
}

</style>