<template>
    <div class=" min-w-min bg-dark-calc text-white">
        <Display/>
        <div class="grid grid-cols-4 bg-gray-calc h-3/5 rounded-t-3xl p-5 px-10 overflow-auto">
            <div class=" col-span-3 grid grid-cols-3">
                <Button :text="7"></Button>
                <Button :text="8"></Button>
                <Button :text="9"></Button>
                
                <Button :text="4"></Button>
                <Button :text="5"></Button>
                <Button :text="6"></Button>
        
                <Button :text="1"></Button>
                <Button :text="2"></Button>
                <Button :text="3"></Button>
                <Button text="AC" class="ac"></Button>
                <Button :text="0"></Button>
                <Button text="."></Button>
            
            </div>
            <div class="col-span-1 flex justify-around items-center flex-col">
                <Button class="operation">
                    <img src="../assets/Group 52.png"/>
                </Button>
                <Button class="operation">
                    <img src="../assets/Group 51.png"/>
                </Button> 
                <Button class="operation">
                    <img src="../assets/Group 51 (1).png"/>
                </Button>
                <Button class="operation">
                    <img src="../assets/Group 53.png"/>
                </Button>
                <Button class="equals">
                    <img src="../assets/Group 55.png"/>
                </Button>
            
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
import Display from './Display.vue'

export default {
  components: { Display, Button },

}
</script>

<style>

</style>