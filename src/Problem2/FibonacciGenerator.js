var FibonacciGenerator = function(number_functions, aggregator){
	var self = this;

	self.generate = function(max_number){
		var fibonacci_array = new Array();
		fibonacci_array[0] = 0;
		fibonacci_array[1] = 1;
		for (var i = 2; i < max_number; i++){
			fibonacci_array[i] = fibonacci_array[i - 1] + fibonacci_array[i - 2];
		}
		return fibonacci_array;

	};

	self.generate_even_terms = function(result_terminator, max_term){
		var fibonacci_array = self.generate(result_terminator);
		var even_array = new Array();
		for(var i =0; i < fibonacci_array.length; i++){
			if (number_functions.is_even(fibonacci_array[i]) && fibonacci_array[i] < max_term)
			{
				even_array.push(fibonacci_array[i]);
			}
		}
		return even_array;
	};

	self.sum_even_fibonacci_terms = function(max_term){
		var even_array = self.generate_even_terms(1000, max_term);
		return aggregator.sum_of_numbers(even_array);
	}
};
