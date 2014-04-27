describe('Multiple of 3 and 5',function(){
	it('should check for multiples of 3', function(){
			var number = 10;
			
			var multiples = new Multiple();
			result = multiples.isMultipleBy3(number);
			
			expect(result).toBeFalsy();
	});

	it('should return true if a number can be multiplied by 3', function(){
		var number = 9;

		var multiples = new Multiple();
		result = multiples.isMultipleBy3(number);

		expect(result).toBeTruthy();
	});

	
	it('should return true if number can be multiplied by 5', function(){
		var number = 15;

		var multiples = new Multiple();
		var result = multiples.isMultipleBy5(number);

		expect(result).toBeTruthy();
	});

	it('should return false if number cannot be multiplied by 5', function(){
		var number = 9;
		var multiples = new Multiple();

		var result = multiples.isMultipleBy5(number);

		expect(result).toBeFalsy();
	});
});
