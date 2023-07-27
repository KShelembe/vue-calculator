<template>
  <div class=" h-2/5 text-right flex justify-end items-end">
    <div class="h-20 m-10">
      <div class="mb-5 font-light text-xl">{{ expression }}</div>
      <h2 class="text-5xl font-bold result" :class="resultClass" v-if="result">{{ formatNumberWithSpaces(shortenText(String(result),10))  }}</h2>
    </div>
    
  </div>
</template>

<script>
export default {

  props:["expression","result","resultClass"],

  methods:{
    shortenText(text, maxLength) {
      if(!text) return text;
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.slice(0, maxLength - 3) + "...";
      }
    },
    formatNumberWithSpaces(numberString) {
    let digits = numberString.replace(/\s/g, '').split('');
    const numberOfSpaces = Math.floor((digits.length - 1) / 3);
    for (let i = 1; i <= numberOfSpaces; i++) {
      digits.splice(-i * 3, 0, ' ');
    }
    return digits.join('');
  }
  }

}
</script>
<style>
  .result{
    transition: 500ms;
    opacity: 1;
  }
  .result.equals{
    position: relative;
    bottom: 44px;
    font-size: 1.25rem;
    font-weight: 300;
  }
  .result.invisible{
    opacity: 0.5;
  }
</style>