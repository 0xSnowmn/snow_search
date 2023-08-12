<template>
  <v-card
          class="pa-1 mb-3 mr-4"
          tile
          width="344"
          height="200"
        ><h2 class="rec text-center mt-10"> {{ title }}</h2>
          
          <div class="text-center mt-5">
            <h3 id="iconx"
      color="red darken-2"
    >
     {{ number }}
          </h3>
          </div>
        </v-card>
</template>

<script>

  export default {
    name: 'boxes',
    props:[
      'title','number'
  ]
  }
</script>