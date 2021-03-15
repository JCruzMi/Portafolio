<template>
  <div class="contact-item-inner outer-shadow">
      <i :class="icon"></i>
      <span>{{name}}</span>
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
    props : ['icon','name','text']
}
</script>

<style>
.contact-item-inner{
    padding: 30px 15px;
    text-align: center;
    border-radius: 5px;
    width: 100%;
}
.contact-item-inner i{
    font-size: 25px;
    color: var(--text-salmon-700);
}
.contact-item-inner span{
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-black-100);
    margin: 15px 0 10px;
}
.contact-item-inner p{
    color: var(--text-salmon-700);
    font-size: 16px;
    line-height: 26px;
    margin: 0;
    word-break: break-word;
}

</style>