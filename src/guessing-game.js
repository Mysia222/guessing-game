class GuessingGame {
    constructor() {
    
    this.max=0;
    this.min=0;
    this.number=0
}
    setRange (min, max) {
    	this.min=min;
    	this.max=max;
    	return this;
    	    }

    guess(){
    	
      this.number = Math.ceil((this.min + this.max) / 2);
      return this.number;
    }

    lower (){
    	this.max=this.number-1;
    	return this;
		
    }

    greater (){
   	 	this.min=this.number;
   	 	return this;
    }
  } 

module.exports = GuessingGame;
