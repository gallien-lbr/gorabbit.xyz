<template>
    <v-container class="grey lighten-5">

        <v-card>
            <v-toolbar
                    color="blue"
                    dark
                    dense
                    flat
            >
                <v-toolbar-title class="body-2">Currency Converter</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                <v-row >
                    <v-col cols="12" md="3">
                        <v-text-field label="Amount"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select :items="items" label="From:" outlined></v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select  :items="items" label="To:" outlined></v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-btn x-large  block color="secondary" dark>Convert
                            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>

                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data: () => ({


        }),
    };
</script>
