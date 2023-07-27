<template>
    <div class=" min-w-min bg-dark-calc text-white">
        <Display :expression="expression" :result="result" :resultClass="resultClass"/>
        <div class="grid grid-cols-4 bg-gray-calc h-3/5 rounded-t-3xl p-5 px-10 overflow-auto">
            <div class=" col-span-3 grid grid-cols-3">
                <Button class="ac" text="DEL" @click="handleDelete"></Button>
                <div></div>
                <div></div>

                <Button @click="handleNumber('7')" :text="7"></Button>
                <Button @click="handleNumber('8')" :text="8"></Button>
                <Button @click="handleNumber('9')" :text="9"></Button>
                
                <Button @click="handleNumber('4')" :text="4"></Button>
                <Button @click="handleNumber('5')" :text="5"></Button>
                <Button @click="handleNumber('6')" :text="6"></Button>
        
                <Button @click="handleNumber('1')" :text="1"></Button>
                <Button @click="handleNumber('2')" :text="2"></Button>
                <Button @click="handleNumber('3')" :text="3"></Button>

                <Button @click="handleAC" text="AC" class="ac"></Button>
                <Button @click="handleNumber('0')" :text="0"></Button>
                <Button @click="handleOperator('.')" text="."></Button>
            
            </div>
            <div class="col-span-1 flex justify-around items-center flex-col ml-2">
                <Button @click="handleOperator('*')" class="operation">
                    <img src="../assets/Group52.png"/>
                </Button>
                <Button @click="handleOperator('-')" class="operation">
                    <img src="../assets/Group51.png"/>
                </Button> 
                <Button @click="handleOperator('+')" class="operation">
                    <img src="../assets/Group51(1).png"/>
                </Button>
                <Button @click="handleOperator('/')" class="operation">
                    <img src="../assets/Group53.png"/>
                </Button>
                <Button class="equals" @click="handleEquals">
                    <img src="../assets/Group55.png"/>
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
  data(){
    return{
        expression:"0",
        result:"0",
        resultClass:""
    }
  },
  watch:{
    expression(){
        if(!["+","-","*","/"].includes(this.expression.split("")[this.expression.length-1])){
            this.evaluateExpression();
        }   

        if(this.expression=="0"){
            this.result="0";
        }

        if(this.resultClass=="equals"){
            setTimeout(()=>{
            this.resultClass="invisible"
        },400);
            setTimeout(()=>{
            this.resultClass=""
        },700);
        }
    }
  },
  methods:{
    handleNumber(number){
        if(this.expression!=="0"){
            this.expression+=number;
        }else{
            this.expression=number;
        }
        
    },
    handleAC(){
        this.expression="0";
    },
    handleOperator(operator){
        if(this.expression!=="0" && !["+","-","*","/","."].includes(this.expression.split("")[this.expression.length-1])){
            this.expression+=operator;
        }
    },
    handleDelete(){
        let e=this.expression.split("");
        e.pop();
        e=e.join("");

        if(e===""){
            e="0";
        }

        this.expression=e;
    }, 
    handleEquals(){
        this.resultClass="equals";
        this.expression=this.result;
    } ,
    evaluateExpression(){
        try{
            this.result=String(eval(this.expression));

        }catch (err){
            console.log(err);
        }
    }
  }
}
</script>

<style>

</style>