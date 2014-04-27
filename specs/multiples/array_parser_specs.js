describe('Array Parser specs', function(){

	var spec = this;

	beforeEach(function(){
		spec.array_of_numbers = new Array(1,2,3,4,5,6,7,8,9,10);
		spec.array_parser = new ArrayParser(spec.array_of_numbers);
	});


	
	it ('should find all the numbers multiple by 3', function(){
		var result = spec.array_parser.get_numbers_multiple_by_3();
		expect(result.length).toEqual(3);
	});

	
	it ('should validate the first number in the array of numbers multiple by 3', function(){
		var result = spec.array_parser.get_numbers_multiple_by_3();
		expect(result[0]).toEqual(3);

	});

	
	it ('should find all the numbers multiple by 5', function(){
		var result = spec.array_parser.get_numbers_multiple_by_5();
		expect(result.length).toEqual(2);
	});
});
