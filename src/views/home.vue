<template>
  <v-row align="center" justify="center" no-gutters>
      <v-col @click="$router.push({ path: current.path + '/records', replace: true })"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          width="344"
          height="300"
        ><h1 class="rec text-center mt-10"> التسجيلات</h1>
          
          <div class="text-center mt-10">
            <v-icon id="iconx"
      color="red darken-2"
    >
     mdi-account-voice
    </v-icon>
          </div>
        </v-card>
      </v-col>
      <v-col @click="$router.push({ path: current.path + '/papers', replace: true })"
      sm="4"
      cols="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          width="344"
          height="300"
        ><h1 class="rec text-center mt-10">المحاضرات</h1>
          
          <div class="text-center mt-10">
            <v-icon id="iconx"
      color="green darken-2"
    >
      mdi-notebook
    </v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>

  export default {
    name: 'Home',
    data(){
      return {
        current: this.$router.currentRoute
      }
    },

    components: {
    },
    created(){
      console.log(this.current.path)//
    }
  }
</script>
<style>
#iconx {
  font-size: 100px;
}

.rec {
  font-family: 'Cairo', sans-serif;
}
</style>