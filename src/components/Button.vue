<template>
  <button class="p-3 cursor-pointer flex justify-center items-center" >
    {{ text }}
  <slot></slot>
  </button>
</template>

<script>
export default {
    props:["text","type"]
}
</script>

<style scoped>
  .operation{
    background: #212327;
    height:60px;
    width: 60px;
    border-radius: 50%;
  }

  .ac{
    background: linear-gradient(180deg, #ED0E98 0%, #FE5A2D 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .equals{
    height: 110px;
    width: 55px;
    border-radius: 32px;
    background: linear-gradient(180deg, #ED0E98 0%, #FE5A2D 100%);
    box-shadow: 0px 8px 24px 2px rgba(247, 60, 87, 0.40);
  }
</style>