<template>
    <div>
        <div class="full">
            <h2>Social Media Dashboard</h2>
            <p>Total followers 23.004</p>
        </div>
        <div class="grid">
            <Dashboard
                v-for="item in dashboard"
                :key="item.name"
                :icon="item.icon"
                :name="item.name"
                :val="item.val"
                :more="item.more"
            ></Dashboard>
        </div>
        <div class="full">
            <h2>Overview - Today</h2>
        </div>
        <div class="grid">
            <Overday
            v-for="item in dataOne"
                :key="item.name"
                :icon="item.icon"
                :name="item.name"
                :val="item.val"
            />
        </div>
    </div>
</template>

<script setup>

    import Dashboard from "./cards/DashCard.vue"
    import Overday from "./cards/Overday.vue"

    const dashboard = [
        {
            icon:"fab fa-facebook", name:"Facebook", val:"1987", more:"19"
        },
        {
            icon:"fab fa-twitter", name:"Twitter", val:"1044", more:"98"
        },
        {
            icon:"fab fa-instagram", name:"Instagram", val:"11K", more:"23"
        },
        {
            icon:"fab fa-youtube", name:"Youtube", val:"8239", more:"144"
        }
    ]

    const dataOne = [
        {
            icon:"fab fa-facebook", name:"Page Views", val:"10K"
        },
        {
            icon:"fab fa-facebook", name:"Likes", val:"6204"
        },
        {
            icon:"fab fa-instagram", name:"Page Views", val:"40k"
        },
        {
            icon:"fab fa-instagram", name:"Likes", val:"40M"
        },
        {
            icon:"fab fa-twitter", name:"retweets", val:"4020"
        },
        {
            icon:"fab fa-twitter", name:"Likes", val:"14k"
        },
        {
            icon:"fab fa-youtube", name:"Total views", val:"29MK"
        },
        {
            icon:"fab fa-youtube", name:"Likes", val:"13M"
        }
    ]

</script>

<style scoped>

.full{
    padding: 1rem;
    color: var(--bg-black-900);
}

.grid{
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    padding: 1rem;
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(4, 1fr);
    background-color: var(--bg-black-50);
    gap: 1rem;
}


@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}


@media (max-width: 675px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 440px) {
  .grid { grid-template-columns: repeat(1, 1fr); }
}

</style>