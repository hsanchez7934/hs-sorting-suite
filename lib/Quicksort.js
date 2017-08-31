function quickSort(array) {
  const left = [];
  const right = [];
  const pivot = array[0];

  if (array.length < 2) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    pivot > array[i] ? left.push(array[i])
                     : right.push(array[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

export default quickSort;
