<template>
    <div>

    </div>
</template>

<script>
    const axios = require("axios");

    export default {
        name: "BordeauxDistrict",

        data: () => ({
            api_url: "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=bor_sigquartiers",
        }),

        mounted: function(){

            const allowed = ['fields', 'geometry'];
            let result = {};
            axios.get(this.api_url)
                .then(response => {
                    let res = response.data.records;
                    res = res.map((i) => {
                        return(i.fields);
                    });
                    console.log(res);

                })
                .catch(e => {
                    this.errors.push(e)
                })
        },

    }
</script>

<style scoped>

</style>