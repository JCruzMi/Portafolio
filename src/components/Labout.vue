<template>
  <div class="about-section section">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2> About me</h2>
        </div>
      </div>
      <div class="row">
          <div class="about-img">
              <div class="img-box inner-shadow">
                  <img class="outer-shadow" src="https://pa1.narvii.com/6266/c2e978d7acc8ee44e3af9fb7b05418a4955299b7_hq.gif">
              </div>
          </div>
          <div class="about-info">
              <p><span>Hi my name is Juan David</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore quae reprehenderit quas natus modi voluptates asperiores dicta maiores! Earum, at cumque debitis iusto illo veniam exercitationem similique rerum sequi!</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
</style>