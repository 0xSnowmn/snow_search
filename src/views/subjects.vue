<template>
    <div>
    <h1 style="font-family: 'Cairo', sans-serif;" class="text-center mb-5">المواد</h1>
    <v-row >
      <v-col  @click="$router.push({ path: '/papers/' + n, replace: true })" v-for="n in 7"
          sm="3"
        >
        <box title="مادة" v-bind:number="n"></box>
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