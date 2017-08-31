function mergeSort(array) {

    var middle = Math.floor(array.length/2);
    var left = array.slice(0,middle);
    var right = array.slice(middle);

    if(array.length < 2) {
      return array;
    }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  
  var result = [];
  var l = 0;
  var r = 0;

  while(l < left.length && r < right.length) {
    if(left[l] < right[r]) {
      result.push(left[l++])
    }
    else {
      result.push(right[r++])
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r))
}

export default mergeSort;
