<template>
  <div id="contact" class="contact-section section">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2> Contact</h2>
        </div>
      </div>
      <div class="row">
        <!-- Items -->
        <div class="contact-item" v-for="item in items" :key="item.name">
          <info :icon="item.icon" :name="item.name" :text="item.text"></info>
        </div>
      </div>
      <!-- Fin Items -->
      <!-- Form -->
      <div class="row">
        <div class="contact-form">
          <form @submit.prevent>
            <div class="row">
              <div class="submit-btn">
                <a 
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvpGRJSDTQVbwCZXmbChdNRdSjTjBqMjTmWRzncbRgbwKhSQQbPrLrPHgKmNSnGFmcdwxF" 
                >
                  <button
                    class="btn-1 outer-shadow hover-in-shadow">
                    Send Message Gmail <i class="fas fa-paper-plane"></i>
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- Fin Form -->
    </div>
  </div>
</template>

<script>
import Info from '../components/contact/Info.vue'
export default {
  components: { Info },
  data(){
    return {
      msName: '',
      msEmail: '',
      msSubjet: '',
      msMessage: ''
    }
  },
  setup(){
    return{
      items : [
        {icon:  "fas fa-phone", name: "Phone", text: "+57 3184247598" },
        {icon:  "fas fa-envelope", name: "Email", text: "juan.murato.cruz@gmail.com" },
        {icon:  "fas fa-map-marker-alt", name: "Addres", text: "Bogóta" }
      ]
    }
  }
}
</script>

<style>
.contact-section{
  padding: 80px 0 80px;
  min-height: 100vh;
}
/**
.contact-section .contact-item{
    flex: 0 0 33.33%;
    padding: 15px;
    max-width: 33.33%;
    display: flex;
}
*/

.contact-section .contact-form{
  margin-top: 50px;
  flex: 0 0 100%;
  max-width: 100%;
}

.contact-section .w-50{
  padding: 0 15px;
  flex: 0 0 50%;
  max-width: 50%;
  
}

.contact-section .input-group{
  margin: 0 0 25px;
  transition: all 0.3s ease;
  border-radius: 30px;
}
.contact-section .input-group:after{
  border-radius: 30px;
}

.contact-section .input-group .input-control{
  height: 45px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  font-size: 16px;
  padding: 0 15px;
  color: var(--text-salmon-700)
}

.contact-section .input-group textarea.input-control{
  height: 184px;
  padding-top: 15px;
  resize: none;
  transition: all 0.5 s ease;
}

.contact-section .submit-btn{
  flex: 0 0 100%;
  max-width: 100%;
  text-align: right;
  padding: 0 15px;
}
.contact-section .submit-btn{
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-section .submit-btn button{
  font-weight: 600;
  color: var(--text-salmon-700)
}

/** Ajustano tamaño */
.contact-section .contact-item{
  flex: 0 0 33.33%;
  padding: 15px;
  max-width: 33.33%;
  display: flex;
}



@media only screen and (max-width: 700px) {
  .contact-section .contact-item{
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 30px;
    margin-bottom: 40px;
  }
  .contact-section .w-50{
    padding: 0 15px;
    flex: 0 0 100%;
    padding: 0 30px;
    max-width: 100%;
  }
  .contact-section .submit-btn{
    flex: 0 0 100%;
    max-width: 100%;
    text-align: right;
    padding: 0 30px;
  }
}
/** */

</style>