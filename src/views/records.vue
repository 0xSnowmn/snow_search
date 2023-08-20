<template>
  <div>
  <h1 style="font-family: 'Cairo', sans-serif;" class="text-center mb-5">التسجيلات</h1>
  <v-row >
    <v-col @click="$router.push({ path: current.path + '/' + n, replace: true })" v-for="n in 7"
        sm="3"
      >
      <box title="التسجيل" v-bind:number="n"></box>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import box from '@/components/boxes.vue'
  export default {
    name: 'records',
    data(){
      return {
        current: this.$router.currentRoute
      }
    },
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