//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

//arrayName.sort(function(a, b){return a-b});

let nums1Sorted = nums1.sort(function(a, b){return a-b});
console.log(nums1Sorted);


//Sort each array in decending order.

console.log('===========')

let num1SortedDescending = nums1.sort(function(a, b){return b-a});

// can also switch order of a, b to reverse
console.log(num1SortedDescending);

