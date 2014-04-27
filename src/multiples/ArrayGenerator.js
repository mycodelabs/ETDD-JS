var ArrayGenerator = function(){
	var self = this;

	self.generate = function(max_number){
		var array_of_numbers = new Array();
		for(var i = 1; i< max_number; i++){
			array_of_numbers.push(i);
		}
		return array_of_numbers;
	};
};



