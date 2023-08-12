<template>
  <div>
  <h1 style="font-family: 'Cairo', sans-serif;" class="text-center mb-5">المحاضرات</h1>
  <v-row >
    <v-col v-for="n in 7"
        sm="3"
      >
        <v-card
          class="pa-1 mb-3 mr-4"
          tile
          width="344"
          height="200"
        ><h2 class="rec text-center mt-10"> المحاضرة</h2>
          
          <div class="text-center mt-5">
            <h3 id="iconx"
      color="red darken-2"
    >
     {{ n }}
          </h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
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