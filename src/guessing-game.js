class GuessingGame {
    constructor() {
    
    this.max1=0;
    this.min1=0;
    this.number=0
}
    setRange (min, max) {
    	this.min1=min;
    	this.max1=max;
    	    }

    guess(){
    	
      this.number = Math.ceil((this.min1 + this.max) / 2)+1;
      return this.number;
    }

    lower (){
    	this.max1=this.number-1;
		
    }

    greater (){
   	 	this.min1=this.number;
		
    }
  } 

module.exports = GuessingGame;
