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
                        <v-text-field
                                label="Amount"
                                v-model="amount"
                                name="amount"
                                type="number"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select :items="currencies"  v-model="selFrom" label="From:" outlined>
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-select  :items="currencies" v-model="selDest" label="To:" outlined>
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-btn @click="handleConvert" x-large  block color="secondary" dark>Convert
                            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <h2>{{ converterResultToAmount }}</h2>
                </v-row>
                <v-row>
                    <p>
                    <span v-if="res">With current rate of : {{ res }}</span>
                    <br /><br />
                    <span id="date">Latest updated : {{ date }}</span>
                    <br />
                    <a href="https://exchangeratesapi.io/">All figures are live from : https://exchangeratesapi.io/</a>
                    </p>
                    <p>
                        Disclaimer: AZApps does not guarantee the accuracy, authenticity, timeliness, reliability,
                        appropriateness, correct sequencing, or completeness of any of the Information And Content.
                    </p>
                </v-row>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    const axios = require('axios');

    export default {
        data: () => ({
            amount:1,
            errors:[],
            currencies: [],
            rates:[],
            date:null,
            base:'EUR',
            selFrom:'',
            selDest:'',
            converterResultToAmount:null,
            res:null,
        }),

        created: function () {
            let api = `http://api.gallienlabeyrie.fr/forex/latest?base=${this.base}`;
            axios.get(api)
                .then(response => {
                    this.rates = response.data.rates;
                    this.date = response.data.date;
                    this.currencies =  Object.keys(response.data.rates);
                    this.currencies.push(this.base);
                    this.currencies = this.currencies.sort();
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },

        methods:{
            handleConvert: function(e){
                let a = 1;
                if(this.selFrom != 'EUR'){
                    a = this.rates[this.selFrom]
                }
                let b = this.rates[this.selDest]

                // convert rate
                let c = b/a;
                let v = c*this.amount;
                v = v.toFixed(6);

                // utiliser filter ?
                this.res = 1 + ' ' + this.selFrom + ' = ' + c + ' ' + this.selDest
                this.converterResultToAmount = this.amount + ' ' + this.selFrom + ' = ' + v + " " +  this.selDest;
            }
        }


    };
</script>
