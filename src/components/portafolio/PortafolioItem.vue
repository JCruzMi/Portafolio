<template>
  <div class="portafolio-item">
      <div class="portafolio-item-inner outer-shadow">
          <div class="portafolio-item-img">
            <img src="https://media.discordapp.net/attachments/821031657322446898/821031774125555752/unknown.png?width=833&height=394">
          </div>
          <p class="portafolio-item-tittle">Title</p>
          <!-- Btn project view -->
          <span class="btn-1 outer-shadow hover-in-shadow view-project">View Project</span>
      </div>
      
  </div>
  <div class="portafolio-item">
      <div class="portafolio-item-inner outer-shadow">
          <div class="portafolio-item-img">
            <img src="https://media.discordapp.net/attachments/821031657322446898/821031774125555752/unknown.png?width=833&height=394">
          </div>
          <p class="portafolio-item-tittle">Title</p>
          <!-- Btn project view -->
          <span class="btn-1 outer-shadow hover-in-shadow view-project">View Project</span>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.portafolio-item{
    flex:0 0 33.33%;
    max-width: 33.33%;
    padding: 15px;;
    display: flex;
    flex-wrap: wrap;
}

.portafolio-item .portafolio-item-inner{
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

.portafolio-item .portafolio-item-img img{
    border-radius: 5px;
    width: 100%;
    transition: all 0.3s ease;
}

.portafolio-item .portafolio-item-inner p{
    font-size: 16px;
    margin: 10px 0 0;
    color: var(--text-black-600);
    text-transform: capitalize;
}
.portafolio-item .portafolio-item-inner span{
    margin-left: 25%;
}

.portafolio-item .portafolio-item-inner:hover .view-project{
    animation: pulse;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.portafolio-item .portafolio-item-inner:hover .portafolio-item-img img{
    transition: all 0.3s ease;
    transform: translateY(-25px)
}

.portafolio-item .portafolio-item-inner .view-project:hover{
    box-shadow: var(--inner-shadow);
    color: var(--text-salmon-700);
    animation-iteration-count: 0;
}

@media only screen and (max-width: 700px) {
  .portafolio-item{
    flex:0 0 100%;
    max-width: 100%;
    padding: 0 30px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>