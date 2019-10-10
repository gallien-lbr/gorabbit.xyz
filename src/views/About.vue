<template>
  <v-card
          class="pa-md-4 mx-lg-auto"
          max-width="344"
  >
    <v-row
            class="py-4 pl-4"
    >
      <v-col class="shrink">
        <v-img
                height="200"
                width="200"
                :src="require('@/assets/office.jpg')"
        ></v-img>
      </v-col>
      <v-col class="text-center">
        <v-container class="pa-0">
          <v-row>
            <v-col>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-card-text>
              <h1>About us</h1>
              <p>
                We provide online widgets and tools.
                <br />
                <a href="mailto:contact@gorabbits.xyz">contact@gorabbits.xyz</a>
                <br />
              </p>
            </v-card-text>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>