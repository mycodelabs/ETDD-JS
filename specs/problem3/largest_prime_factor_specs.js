describe('largest prime factor concern', function(){

	var spec = this;

	spec.factors = new Factors();
	spec.prime_number = new PrimeNumber();
	spec.largest_prime_factor = new LargestPrimeFactor(spec.factors, spec.prime_number);

	it('should get largest prime factor for 13195', function(){
		var result = spec.largest_prime_factor.of(13195);
		expect(result).toEqual(29);
	})

	it('should get largest prime factor for 600851475143', function(){
		var result = spec.largest_prime_factor.of(600851475143);
		expect(result).toEqual(6857);
	});
});
