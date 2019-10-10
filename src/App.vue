<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>AZ</span>
        <span class="font-weight-light">Apps</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href=""
        target="_blank"
      >
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
