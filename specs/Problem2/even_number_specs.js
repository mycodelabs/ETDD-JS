describe('Even number concern', function(){

	var spec = this;

	beforeEach(function(){
		spec.number_functions = new NumberFunctions();	
	});

	it ('should return true if a given number is even', function(){
		var number = 4;
		result = spec.number_functions.is_even(number);
		expect(result).toBeTruthy();
	});

	it ('should return false if a given number is not even', function(){
		var number = 5;
		var result = spec.number_functions.is_even(number);
		expect(result).toBeFalsy();
	});
});
