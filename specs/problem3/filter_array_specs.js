describe('Filter Array Concern', function(){

	var spec = this;


	it ('should filter the array elements based on the function passed to it', function(){
		var array_of_numbers = new Array();
		array_of_numbers = [2,3,4,5,6];
		var result = array_of_numbers.filter(even_function);
		expect(result.length).toEqual(3);
	});

	it ('should sort the array in ascending order', function(){
		var array_of_numbers = [9,10,15,6,2,3];
		var result = array_of_numbers.sortAscending();
		expect(result[0]).toEqual(2);
	});

	it ('should sort the array in descending order', function(){
		var array_of_numbers = [9,10,15,6,2,3];
		var result = array_of_numbers.sortDescending();
		expect(result[0]).toEqual(15);
	});



	var even_function = function(number){
		if (number % 2 == 0) return true;
		return false;
	}
});
