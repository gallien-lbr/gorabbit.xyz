<template>
  <v-container>

    <h1>Calculatrice revenu net pour micro-entrepreneur (Micro-BNC)</h1>
      <template>
        <v-row>
          <v-col>
            <v-card  :elevation="3" class="pa-5">
              <v-form
                      ref="form"
                      class="pb-5"
              >

                <v-alert v-if="res"    type="success"  >
                  Revenu net estimé   :  <b>{{res }}€</b> <br />

                </v-alert>


                <v-alert v-if="res" type="info">
                  <i>Charges sur la prestation : {{ calcCharges }}€</i>
                </v-alert>


                <v-text-field
                        v-model="price"
                        suffix="€"
                        outlined
                        single-line
                        label="Montant facturé Hors Taxe"
                        type="number"
                        class="pb-5"
                        min="0"
                        @keypress="isNumber($event)"

                />

                <v-select
                        v-model="selRate"
                        :items="rates"
                        item-text="text"
                        item-value="value"
                        outlined

                        :rules="[v => !!v || 'Champ requis']"
                        label="Taux de cotisations sociales"
                        required
                ></v-select>

                <v-checkbox
                        v-model="plf"
                        label="Option prélèvement libératoire forfaitaire - 2.2% du CA"
                        required
                ></v-checkbox>

                <v-checkbox
                        v-model="vat"
                        label="TVA 20% facturé (si le CA est supérieur à 33 200€)"
                        required
                ></v-checkbox>


                <v-text-field
                        value="0.10%"
                        label="MICRO SOCIAL CFP COMM"
                        filled
                        disabled
                ></v-text-field>


                <v-btn
                        :disabled="!valid"
                        color="primary"
                        class="mr-4"
                        block
                        @click="calculate"
                >
                  Calculer
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </template>
  </v-container>
</template>
<style>
  h1{
    font-size:1.4em;
  }
</style>

<script>
import FreelanceUtils from "../class/FreelanceUtils";

export default {
  name: 'Calculator',

  data: () => ({
    selRate:   0.055 ,
    res: null,
    charges: null,
    errors:[],
    rates: [
      {
        value: 0.055,
        text: '5.5% Jusqu’à la fin du 3ème trimestre après le début d activité)',
      },
      {
        value: 0.11,
        text: '11% (4 trimestres suivants)'
      },
      {
        value: 0.165,
        text:  '16.5% (4 trimestres suivants)'
      },
      {
        value: 0.22,
        text: '22% (Au-delà)'
      }
    ],
    valid: false,
    price : null,
    vat : false,
    plf: true
  }),


  methods: {
    calculate: function() {

      const util  = new FreelanceUtils();
      util.plf =  this.plf ? util.defaultPlf : 0 ;
      util.hasVAT = this.vat;
      util.accre = this.selRate;
      util.price = this.price;
      this.res = util.getNetIncome();
    },

    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },

  computed:{
      calcCharges: function(){
         return Math.ceil(this.price - this.res);
      }
  },

  watch:  {
    price: function(){
        this.valid = this.price.length !== 0  ;
        this.res = null;
    },
    vat: function(){
      this.res = null;
    },
    plf: function(){
      this.res = null;
    },
    selRate: function(){
      this.res = null;
    }
  },
};
</script>
