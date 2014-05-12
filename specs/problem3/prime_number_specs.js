describe('Prime Number Concern', function(){
	
	var spec = this;

	beforeEach(function(){
		spec.prime_number = new PrimeNumber();
	});

	it ('given number 3 should return true', function(){
		var result = spec.prime_number.check(3);
		expect(result).toBeTruthy();
	});

	it ('given number 4 should return false', function(){
		var result = spec.prime_number.check(4);
		expect(result).toBeFalsy();
	});
});
