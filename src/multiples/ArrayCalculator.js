var ArrayCalculator = function(array_parser, aggregator){
	var self = this;
	self.calculate = function(){
		var numbers_multiple_by_3 = array_parser.get_numbers_multiple_by_3();
		var numbers_multiple_by_5 = array_parser.get_numbers_multiple_by_5();
		var final_array = aggregator.join(numbers_multiple_by_3, numbers_multiple_by_5);
		return aggregator.sum_of_numbers(final_array);
	};
};
