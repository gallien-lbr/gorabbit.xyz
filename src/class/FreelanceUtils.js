// FreelanceUtils.js

export default class FreelanceUtils{
    constructor() {
        this.plf = null;
        this.defaultPlf = 0.022;
        this.MICRO_SOCIAL_CFP = 0.01;
        this.VAT = 0.20;
        this.price = null;
        this.hasVAT = false;
        this.accre = null;
    }
    getNetIncome(){
         return Math.ceil(this.getCosts() * this.price);
     }
    getCosts(){
         let costs = 1;
         costs -=  this.plf;
        // eslint-disable-next-line no-console
        console.log(costs);
         costs -=  this.hasVAT ? this.VAT : 0;
        // eslint-disable-next-line no-console
        console.log(costs);
         costs -=  this.accre + this.MICRO_SOCIAL_CFP;
        // eslint-disable-next-line no-console
         console.log(costs);
         return costs;
     }
}