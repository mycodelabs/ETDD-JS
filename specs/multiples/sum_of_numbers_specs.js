describe('Sum of numbers in Array', function(){

	var spec = this;

	beforeEach(function(){
		spec.array_of_numbers = new Array(1,2,3,4);
		spec.aggregator = new NumbersAggregator();
	});

	it ('should get the sum given an array', function(){
		var result = spec.aggregator.sum_of_numbers(spec.array_of_numbers);
		expect(result).toEqual(10);
	});
});


describe('Given two arrays', function(){
	it('should join two arrays', function(){
		var aggregator = new NumbersAggregator();
		var first_array = new Array(1,2,3);
		var second_array = new Array(4,5);
		var result = aggregator.join(first_array, second_array);
		expect(result.length).toEqual(5);
	});
});

describe('Given an array of 1000 integers', function(){
	it('should find the sum of numbers multiple by 3 and 5', function(){
		var array_generator = new ArrayGenerator();
		
		var result = array_generator.generate(1000);
		expect(result.length).toEqual(999);
	});

	it('should get the sum of numbers', function(){
		var aggregator = new NumbersAggregator();
		var array_generator = new ArrayGenerator();
		var array_parser = new ArrayParser(array_generator.generate(10));
		var array_calculator = new ArrayCalculator(array_parser, aggregator);
		result = array_calculator.calculate();
		expect(result).toEqual(23);
	});
});

