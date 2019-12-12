<template>
    <div>
        <v-card
                class="mx-auto"
                 tile>
            <v-list>
                <v-subheader>Quartiers de Bordeaux</v-subheader>
                <v-list-item-group>
                    <v-list-item v-for="dist in districts">
                        <v-list-item-content>
                            <v-list-item-title v-html="dist.nom"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    const axios = require("axios");

    export default {
        name: "BordeauxDistrict",

        data: () => ({
            api_url: "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=bor_sigquartiers",
            districts: null,
        }),

        mounted: function(){
            axios.get(this.api_url)
                .then(response => {
                    let res = response.data.records;
                    res = res.map((i) => {
                        return(i.fields);
                    });
                   this.districts = res;
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },

    }
</script>

<style scoped>

</style>