<template>
    <div>
    <h1 style="font-family: 'Cairo', sans-serif;" class="text-center mb-5">المحاضرات</h1>
    <v-row >
      <v-col v-for="n in 7"
          sm="3"
        >
        <box title="المحاضرات" v-bind:number="n"></box>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import box from '@/components/boxes.vue'
    export default {
      name: 'records',
  
      components: {
        box
      },
    }
  </script>
  <style>
  #iconx {
    font-size: 40px;
  }
  .rec {
    font-family: 'Cairo', sans-serif;
    color:#E65100
  ;
  
  }
  </style>