var LargestPrimeFactor = function(factors, prime_number){
	var self = this;

	self.of = function(number){
		var array_of_factors = factors.get_for(number);
		var prime_factors_array = array_of_factors.filter(prime_number.check);
		return prime_factors_array.sortDescending()[0];
	}

	
}
