Array.prototype.filter = function(func){
	var array_elements = this;
	var filtered_array = new Array();
	for(var i = 0; i < array_elements.length; i++)
	{
		if (func.call(undefined, array_elements[i]))
			filtered_array.push(array_elements[i]);
	}

	return filtered_array;
}
	function descending(a, b){ return (b-a); }
	function ascending(a, b){ return (a-b); }
Array.prototype.sortAscending = function(){
	var array_elements = this;
	return array_elements.sort(ascending);
}

Array.prototype.sortDescending = function(){
	var array_elements = this;
	return array_elements.sort(descending);
}

