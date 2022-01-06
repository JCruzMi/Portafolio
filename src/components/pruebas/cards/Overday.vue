<template>
  <div class="outer-shadow card">
    <div class="followers">
        {{props.name}}
        <i :class="props.icon" ></i>
    </div>
    <div class="val">
        {{props.val}}
    </div>
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
        }
    })

</script>

<style scoped>

.card{
    padding: 1rem 1rem;
    text-align:left;
}

.val{
    font-size: 20px;
    font-weight: 300;
    color: var(--bg-black-900);
    padding-top: 1rem;
}

.followers{
    color: gray;
    display: flex;
    justify-content: space-between;
}




</style>