function mergeSort(arr) {
  //
  if (arr.length < 2) {
    return arr;
  }
  // split the array into 2 arrays
  // check if the arr.length < 2
  // repeat those steps till arr.length < 2
  // then start sorting every 2 arrays and merging them back together sorted
  // after doing this for all the 1 element arrays, do it for the 2 elements arrays
  // repeat till you get the original array sorted
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}

console.log(mergeSort([1, 7, 3, 5, 4]));
