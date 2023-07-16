/* function fibs(num) {
  let a = 0;
  let b = 1;
  let arr = [a, b];

  for (let i = 0; i < num - 2; i++) {
    let result = a + b;
    a = b;
    b = result;
    arr.push(result);
  }
  return arr;
}
 */

function arr(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(arr(8));
