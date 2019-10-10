<template>
    <v-card class="pa-4" tile>
        <v-card-title>
            🔥 Tools and widgets
        </v-card-title>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    <router-link
                            to="/currency-converter"
                            tag="v-btn"
                    >
                    <v-btn>Currency Converter</v-btn>
                    </router-link>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <!--v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title>Two-line item</v-list-item-title>
                <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title>Three-line item</v-list-item-title>
                <v-list-item-subtitle>
                    Secondary line text Lorem ipsum dolor sit amet,
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    consectetur adipiscing elit.
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item-->
    </v-card>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>