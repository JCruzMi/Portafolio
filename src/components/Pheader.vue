<template>
  <div class="wrapper">
    <p>Hi!</p>
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts">
      <li><span>Sketcher</span></li>
      <li><span>Designer</span></li>
      <li><span>Developer</span></li>
      <li><span>Freelancer</span></li>
    </ul>
    <router-link class="found btn-1 outer-shadow hover-in-shadow" to="/about">About Me</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.wrapper .btn-1{
  margin-top: 30px;
}

.wrapper{
  display: block;
}
.wrapper p{
  color: var(--bg-black-900);
  font-size: 20px;
  text-transform: capitaliza;
  margin: 0;
}

.wrapper .found{
  background-color: var(--bg-black-50);
}
.wrapper .static-txt{
  font-family: 'Poppins', sans-serif;
  color: var(--bg-black-900);
  font-size: 55px;
  font-weight: 700;
  margin: 0;
}
.wrapper .dynamic-txts{
  margin-left: 0px;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}
.dynamic-txts li{
  font-family: 'Poppins', sans-serif;
  list-style: none;
  color: #FC6D6D;
  font-size: 60px;
  font-weight: 500;
  position: relative;
  top: 0;
  animation: slide 12s steps(4) infinite;
}
@keyframes slide {
  100%{
    top: -360px;
  }
}
.dynamic-txts li span{
  position: relative;
  margin: 5px 0;
  line-height: 90px;
}
.dynamic-txts li span::after{
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--bg-black-50);
  border-left: 2px solid #FC6D6D;
  animation: typing 3s steps(10) infinite;
}
@keyframes typing {
  40%, 60%{
    left: calc(100% + 30px);
  }
  100%{
    left: 0;
  }
}
@media(max-width: 411px){
  .wrapper .static-txt{
    font-size: 40px;
    font-weight: 600;
  }
  .dynamic-txts li{
    font-size: 40px;
  }
}

@media(max-width: 380px){
  .wrapper .static-txt{
    font-size: 40px;
    font-weight: 600;
  }
  .dynamic-txts li span::after{
    top: 4px;
  }
}

</style>