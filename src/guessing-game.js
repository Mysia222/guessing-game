class GuessingGame {
    constructor() {
    
    this.max=0;
    this.min=0;
    this.number=0

    this.setRange = function (min, max) {
    	this.min=min;
    	this.max=max;
    	    };

    this.guess = function (){

      this.number = Math.ceil((this.min + this.max) / 2)+1;
      return this.number;
    };

    this.lower= function (){
    	this.max=this.number-1;
		
    };

    this.greater=function (){
   	 	this.min=this.number;
		
    };
  } 
}
module.exports = GuessingGame;

