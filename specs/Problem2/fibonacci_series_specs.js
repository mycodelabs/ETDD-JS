describe('Fibonacci series concern', function(){
	var spec = this;

	beforeEach(function(){
		spec.number_aggregator = new NumbersAggregator();
		spec.number_functions = new NumberFunctions();
		spec.fibonacci_generator = new FibonacciGenerator(spec.number_functions, spec.number_aggregator);
	});
	
 	it('should get the fibonacci sequence', function(){
		var result = spec.fibonacci_generator.generate(6);
		expect(result.length).toEqual(6);
	});

 	it('should get even number fibonacci in an array', function(){
		var result = spec.fibonacci_generator.generate_even_terms(100, 10);
		expect(result.length).toEqual(3);
	})

	it('should get the sum of number in array', function(){
		var result = spec.fibonacci_generator.sum_even_fibonacci_terms(20);
		expect(result).toEqual(10);
	});

	it('should get the sum of number in array with max term less than 4 million', function(){
		var result = spec.fibonacci_generator.sum_even_fibonacci_terms(4000000);
		expect(result).toEqual(4613732);
	});
});
