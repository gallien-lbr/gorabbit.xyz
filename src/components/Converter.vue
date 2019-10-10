<template>
  <v-container>
      <h1>A Currency Converter for travelers</h1>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/undraw_adventure_4hum.svg')"
          class="my-3" contain height="200"></v-img>
      </v-flex>
        <v-col class="d-flex" cols="6" sm="6">
            <v-select  :items="items" label="Outlined style" outlined></v-select>
        </v-col>

        <v-col class="d-flex" cols="6" sm="6">
            <v-select  :items="items" label="Outlined style" outlined></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="12">
            <v-btn x-large outlined block color="primary" dark>Convert</v-btn>
        </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({


  }),
};
</script>
