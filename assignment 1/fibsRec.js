/* function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let sequence = fibsRec(n - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }
} */

function fibsRec(num) {
  if (num < 2) return num;
  else return fibsRec(num - 1) + fibsRec(num - 2);
}

console.log(fibsRec(8));
