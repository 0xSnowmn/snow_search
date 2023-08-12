<template>
  <div>
  <h1 class="text-center">Hello</h1>
  <v-row >
    <v-col v-for="n in 7"
        sm="3"
      >
        <v-card
          class="pa-1 mb-3 mr-4"
          tile
          width="344"
          height="200"
        ><h2 class="rec text-center mt-10"> التسجيلات</h2>
          
          <div class="text-center mt-10">
            <v-icon id="iconx"
      color="red darken-2"
    >
     mdi-account-voice
    </v-icon>
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
  font-size: 30px;
}
.rec {
  font-family: 'Cairo', sans-serif;

}
</style>