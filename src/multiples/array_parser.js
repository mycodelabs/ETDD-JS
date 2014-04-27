var ArrayParser = function(array_of_numbers){
	var self = this;
	

	
	self.get_numbers_multiple_by_3 = function(){
		var multiples = new Multiple();
		var numbers_multiple_by_3 = new Array();
		for(var i = 0; i < array_of_numbers.length; i++){
			if (multiples.isMultipleBy3(array_of_numbers[i])){
				numbers_multiple_by_3.push(array_of_numbers[i]);
				array_of_numbers.splice(i, 1);
			}
		}

		return numbers_multiple_by_3;
	}

	self.get_numbers_multiple_by_5 = function(){
		var multiples = new Multiple();
		var numbers_multiple_by_5 = new Array();
		for(var i = 0; i < array_of_numbers.length; i++){
			if (multiples.isMultipleBy5(array_of_numbers[i])){
				numbers_multiple_by_5.push(array_of_numbers[i]);
				array_of_numbers.splice(i, 1);
			}
		
		}

		return numbers_multiple_by_5;
	}
}
