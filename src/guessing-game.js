class GuessingGame {
    constructor() {
    
    this.max=0;
    this.min=0;
    this.number=0

    this.setRange = function (min, max) {
    	this.min=min;
    	this.max=max;
    	return this;
    };

    this.guess = function (){

    	 while (this.min < this.max)                
       { number = Math.ceil((this.min + this.max) / 2);
       	if (this.number <= number) 
       		this.lower();
       else this.greater();
       }
       if(min==number)
       	return min;
       else
       	return -1;
    };

    this.lower= function (){
    	this.max=this.number;
		return this;
    };

    this.greater=function (){
   	 	this.min=this.number;
		return this;
    };
} 
}
module.exports = GuessingGame;

