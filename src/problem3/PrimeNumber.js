var PrimeNumber = function(){
	var self = this;

	self.check = function(number){
		if (number == 1) return false;
		for (var i = 2; i < number; i++)
	
		{
			if (number % i == 0){
				return false;
		
			}
			return true;
		}
	}
};
