// describe('Split Array Function', function(){
// 	it('is able to split an array into two halves', function(){
// 		expect( split([1,2,3,4]) ).toEqual( [[1,2],[3,4]] );
// 	})
// 	it('is able to split an uneven array into two halves', function(){
// 		expect( split([1,2,3,4,5]) ).toEqual( [[1,2,3],[4,5]] );
// 	})
// })

// describe('Merge Array Function', function(){
// 	it('is able to merge two array into a single array', function(){
// 		expect( merge([1,4],[2,3]) ).toEqual( [1,2,3,4] );
// 	})
// 	it('is able to merge two arrays of different lengths into a single array', function(){
// 		expect( merge([1,2,3],[4,5]) ).toEqual( [1,2,3,4,5] );
// 	})
// })

describe('Merge Sort Function', function(){
	it('is able to merge sort an array: [1,4,2,3]', function(){
		expect( mergeSort([1,4,2,3]) ).toEqual( [1,2,3,4] );
	})
	it('is able to merge sort an array: [10, 4, 5, 29, 8, 45, 99]', function(){
		expect( mergeSort([10, 4, 5, 29, 8, 45, 99]) ).toEqual( [4, 5, 8, 10, 29, 45, 99] );
	})
})