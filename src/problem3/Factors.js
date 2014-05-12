var Factors = function(){
	var self = this;

	var array_of_factors = new Array();

	self.get_for = function(number){


		if (number == 1){
			array_of_factors.push(1);
		}
		
		
		for(var i = 2; i <= number; i++){
			var remainder = number % i;
		
			if (remainder == 0){
				array_of_factors.push(i);
				number = number / i;
				i = 1;
		
			}
		}
		
		return array_of_factors;
	};
};
