describe ('Bubble Sort', function() {
	it ('handles an empty array', function() {
		expect( bubbleSort([]) ).toEqual( [] );
	});
	it ('handles a single number', function() {
		expect( bubbleSort([1]) ).toEqual( [1] );
	});
	it ('handles a sorted array', function() {
		expect( bubbleSort([1,2,3]) ).toEqual( [1,2,3] );
	});
	it ('handles an unsorted array', function() {
		expect( bubbleSort([10, 4, 5, 29, 8, 45, 99]) ).toEqual( [4, 5, 8, 10, 29, 45, 99] );
	});
});