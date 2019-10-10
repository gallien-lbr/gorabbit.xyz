<template>
  <v-app>
    <v-app-bar app>
      <router-link
              to="/"
              tag="v-toolbar-title"
      >
      <v-toolbar-title class="headline text-uppercase">
        <span>GO</span>
        <span class="font-weight-light">rabbit.xyz</span>
      </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <router-link
              to="/about"
              tag="v-btn"
      >
        <v-btn
          text
        >
          <span class="mr-2" >About</span>
      </v-btn>
      </router-link>
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
