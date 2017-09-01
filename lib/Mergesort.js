function mergeSort(array) {
    // Var middle is a number that we 'generate' and pass in to
    // a slice method to split the array in half as best as we can
    var middle = Math.floor(array.length/2);
    // Var left is used to store the first half of the array
    var left = array.slice(0,middle);
    // var right is used to store the second half of the array
    var right = array.slice(middle);

    // this is our base case, if the length of array is 1, we return the array
    if(array.length < 2) {
      return array;
    }

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

  // Var result is the empty array that we'll use to push our sorted numbers
  // as the function keeps running
  var result = [];

  // I assign 0 to two different variables, one that I'll use for left array and one for right array
  var l = 0;
  var r = 0;
  // this loops will run as long as 0 is less than the length of each array
  while(l < left.length && r < right.length) {
    // the if condition compares the first item in each array to each other and pushes
    // the smaller number in to the result array
    if(left[l] < right[r]) {
      result.push(left[l++])
    }
    else {
      result.push(right[r++])
    }
  }
  // this will return an array with the sorted numbers 
  return result.concat(left.slice(l)).concat(right.slice(r))
}

export default mergeSort;
