<template>
    <div class="p-5 flex justify-center align-middle w-full h-screen bg-zinc-900">
        <Calculator/>
    </div>
</template>

<script>
import Display from './components/Display.vue';
import Button from './components/Button.vue';
import Calculator from './components/Calculator.vue';

export default {
    components:{ Display, Button, Calculator }
}
</script>

<style>

</style>