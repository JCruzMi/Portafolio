<template>
    <div class="icon" v-if="icon">
        <div class="oll"><a class="tool-tip outer-shadow hover-in-shadow" :href="link" target="_blank">{{name}}</a></div>
        <a :href="link" target="_blank" class="outer-shadow hover-in-shadow"><i :class="icon"></i></a>
    </div>
    <div class="icon" v-else>
        <div class="all"><a class="tool-top outer-shadow hover-in-shadow" :href="link" target="_blank">{{name}}</a></div>
    </div>
</template>

<script>
export default {
    props : ['icon','name','link'],
    
}
</script>

<style scoped>

.icon{
    display: inline-flex;
    margin: 0 4px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.icon a{
    display:block;
    height: 40px;
    width: 40px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    color: var(--text-black-600);
    margin: 0 4px;
    border-radius: 50%;
    animation: cubiz-bezier(0.68,-0.55,0.265,1.55);
    transition: all 0.4s;
    
}

a:after{
    border-radius: 50%;
}

a:hover{
    color: var(--text-salmon-700);
}

.icon .tool-tip{
    font-weight: 600;
    color: var(--bg-black-900);
    text-transform: capitalize;
    margin: 2.2px;
    padding: 0px 10px 2px 10px;
    border-radius: 25px;
    display: block;
    line-height: 40px;
    width: auto;
    height: 40px;
    font-size: 16px;
    opacity: 0;
    pointer-events: none;
}

.icon .tool-tip:after{
    cursor: pointer;
    border-radius: 25px;
}

.icon:hover .tool-tip{
    opacity: 1;
    pointer-events: auto;
    animation: fadeInUp;
    animation-duration: 0.4s;
    animation-iteration-count: 1;
}

.icon .all .tool-top{
    font-weight: 600;
    color: var(--bg-black-900);
    text-transform: capitalize;
    margin: 2.2px;
    padding: 0px 10px 2px 10px;
    border-radius: 25px;
    display: block;
    line-height: 40px;
    width: auto;
    height: 40px;
    font-size: 16px;
    opacity: 1;
    cursor: pointer;
}

.icon .all .tool-top:after{
    border-radius: 25px;
}

</style>