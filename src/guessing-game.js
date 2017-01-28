class GuessingGame {
    constructor() {
   this.min=0;
   this.max=0;
   //this.number=0;

    this.setRange = function (min, max) {
    	
    	this.min=min;
    	this.max=max;
    	
    };

    this.guess = function (){
   /* 	var max,min,k;
    	this.setRange(max,min);
    	 while (min < max)                
       {  k = Math.floor((min+max)/2);
       	if (this.number <= k) 
       		this.lower();
       else this.greater();
       }
       if(min==number)
       	return min;
       else
       	return -1;*/
    };

    this.lower= function (){
//var min,max;
//this.setRange(min,max);
//min=this.k;
    };

    this.greater=function (){
//var min,max;
//this.setRange(min,max);
//min=this.k+1;
    };
}
}
module.exports = GuessingGame;
