class GuessingGame {
    constructor() {
    
    this.max1=0;
    this.min1=0;
    this.number=0

    this.setRange = function (min, max) {
    	this.min1=min;
    	this.max1=max;
    	    };

    this.guess = function (){

      this.number = Math.ceil((this.min1 + this.max) / 2)+1;
      return this.number;
    };

    this.lower= function (){
    	this.max1=this.number-1;
		
    };

    this.greater=function (){
   	 	this.min1=this.number;
		
    };
  } 
}
module.exports = GuessingGame;


