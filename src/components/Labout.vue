<template>
  <div id="Labout" class="about-section section">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2> About me</h2>
        </div>
      </div>
      <div class="row">
          <div class="about-img">
              <div class="img-box inner-shadow">
                  <img class="outer-shadow" src="https://media.discordapp.net/attachments/804511906735718421/830860478083104788/emotesjaja.png?width=522&height=522">
              </div>
              <!-- social links start-->
              <div class="social-links">
                <social :icon="'fab fa-instagram'" :name="'instagram'" :link="'https://www.instagram.com/huanmurato/'"></social>
                <social :icon="'fab fa-linkedin-in'" :name="'linkedin'" :link="'https://www.linkedin.com/in/juan-david-cruz-huan/'"></social>
                <social :icon="'fab fa-facebook-f'" :name="'facebook'" :link="'https://www.facebook.com/juandavid.cruzmiranda'"></social>
                <social :icon="'fab fa-github'" :name="'github'" :link="'https://github.com/JCruzMi/'"></social>
              </div>
              <!-- social links end-->
          </div>
          <div class="about-info" id="about-info">
              <p><span>Hola! mi nombre es Juan David</span> soy un egresado de la universidad EAN con titulo en ingenieria en sistemas, he desarrolaldo varios cursos dentro de mi
              ambito laboral y fuera de ellos.
              </p>
              <p>Entre mis pasatiempos estan el aprender nuevas cosas sobre programacion, dibujar y jugar diveojuegos</p>
              <router-link class="btn-1 outer-shadow hover-in-shadow" to="/About">More About Me</router-link>
              <router-link to="/Contact" class="btn-1 outer-shadow hover-in-shadow">Contact</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Social from "./Social.vue"

export default {
  components: { Social },
  setup(){
    const socials = {}

    return {socials}
    }
}
</script>

<style>
.about-section{
    padding: 80px 0 80px;
    min-height: 100vh;
}

.about-section .about-img{
    flex: 0 0 40%;
    max-width: 40%;
    padding: 0 15px;
}

.about-section .about-img .img-box{
    padding: 15px;
    border-radius: 5px;
}

.about-section .about-img .img-box img{
    width: 100%;
    border: 10px solid transparent;
    border-radius: 5px;
}

.about-section .about-img .social-links{
    margin-top: 20px;
    text-align: center;
}

.about-section .about-info{
    flex: 0 0 60%;
    max-width: 60%;
    padding: 0 15px;
}

.about-section .about-info p{
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 15px;
    color: var(--text-black-600)
}

.about-section .about-info span{
    font-weight: 600;
    color: var(--bg-black-900)
}

.about-section .about-info .btn-1{
    margin: 30px 20px 0 0;
    
}

@media(max-width: 590px){
  .about-section .about-info,
  .about-section .about-img{
    flex: 0 0 100%;
    max-width: 100%;
  }
  .about-section .about-img{
    padding-bottom: 30px;
  }
}
</style>