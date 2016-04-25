function bubbleSort(arr) {
	var swap = true;
	var len = arr.length-1;

	while (swap && arr.length > 1) {
		swap = false;
		for (var i = 0; i < len; i++) {

			if (arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swap = true;
			}
		}
		len--;

	}
	return arr;	

}