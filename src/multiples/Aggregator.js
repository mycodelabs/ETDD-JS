var NumbersAggregator = function(){
	var self = this;

	self.sum_of_numbers = function(array_of_numbers){
		var sum = 0;

	
		for(var i = 0; i < array_of_numbers.length; i++){
			sum = sum + array_of_numbers[i];
		}
		return sum;
	};

	self.join = function(first_array, second_array){
		return first_array.concat(second_array);
	};

};

