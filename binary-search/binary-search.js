'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	// base case: if arr.length === 1
		// if the num is target, return true
		// else return false
	// find out root/ middle index by splitting the array in half
	// if root is greater than the target, 
	// recurse with the left slice array
	
	if (array.length === 0) {
		// if (array[0] === target) {
		// 		console.log('true')
		// 		return true
		// 	} else {
		// 			console.log('false')
		// 			return false
		// 		}
				
				return []
			}
			
	let rootIdx = Math.floor(array.length / 2)
	let root = array[rootIdx]

	// console.log(array[Math.floor(array.length / 2)], array[Math.ceil(array.length / 2)])
	console.log(Math.floor(array.length / 2), Math.ceil(array.length / 2))
	console.log('root', root)
	
	if (root > target) {
		binarySearch(array.slice(0, rootIdx), target)
	} else {
		binarySearch(array.slice(rootIdx+1, array.length), target)
	}
	
	if (root === target) {
		return true
	} else {
		return false
	}

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch