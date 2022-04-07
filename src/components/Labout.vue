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
                <social :icon="'fab fa-github'" :name="'github'" :link="'https://github.com/JCruzMi/'"></social>
              </div>
              <!-- social links end-->
          </div>
          <div class="about-info" id="about-info">
              <p><span>Hola! mucho gusto
                <br>Mi nombre es Juan David Cruz.</span><br>
              Soy graduado de Ingenieria en Sistemas de la universidad EAN <i class="fas fa-user-graduate"></i>, 
              me gustan las series, peliculas de todo tipo, escuchar musica, los videojuegos <i class="fas fa-gamepad"></i> y los gatos <i class="fas fa-paw"></i>.
              </p>
              <p>Entre mis pasatiempos estan el aprender nuevas tecnologias con base en la programación para expandir mis conocimientos <i class="fas fa-laptop-code"></i>, dibujar <i class="fas fa-pen"></i> y aprender idiomas por cuenta propia <i class="fas fa-language"></i>.</p>
              <p>He participado en varias maratones nacionales y participe en la maratón Regional de 2020 representando a la Universidad EAN.</p>
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

.about-section .about-info i{
  color: var(--text-salmon-700);
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