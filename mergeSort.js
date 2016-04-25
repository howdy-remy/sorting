function split(arr){
	console.log('split:',arr);
	var halfLength = Math.ceil(arr.length/2),
	firstHalf = arr.slice(0,halfLength),
	secondHalf = arr.slice(halfLength);
	return [firstHalf, secondHalf]
}

function merge(arr1, arr2){
	var sortedArray = [],
		maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;

	//while there are numbers in both arrays
	while(arr1.length !=0 && arr2.length !=0){
		if(arr1[0] < arr2[0]){
			sortedArray.push(arr1.shift());
		} else {
			sortedArray.push(arr2.shift());
		}
	}

	//append any remaining numbers
	sortedArray = sortedArray.concat(arr1).concat(arr2);;

	return sortedArray;
};

function mergeSort(arr){
	console.log(arr);
	arr = split(arr);
	var finished = false;

	while(!finished){
		if(arr[0].length === 1){
			finished = true;
		}
		for (var i = 0; i < arr.length; i++) {
			arr[i] = split(arr[i])
		}		
	}


	
	
	console.log('final split:', arr)
	return arr;

	//split
	//base case: if arr[0].length = 1, the array is finished splitting
	//recursive case: use split on each index in the array

	//merge
	//after splitting - 
	//base case: 
	//recursive case:


	//merging section
}