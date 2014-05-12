describe('Factorization concern', function(){
	var spec = this;

	beforeEach(function(){
		spec.factors = new Factors();
	});
	

	it ('should return all the factors of 4', function(){
		var number = 4;
		var result = spec.factors.get_for(13195);
		expect(result.length).toEqual(4);
	});

	
	it ('should return 1 if the number is 1', function(){
		var number = 1;
		var result = spec.factors.get_for(1);
		expect(result[0]).toEqual(1);
	});
})
