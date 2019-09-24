function fib() {
  const list = [];
  let a = 0;
  let b = 1;
  list.push(a);
  list.push(b);

  for (let i = 2; i < 50; i++) {
    const temp = b;
    list.push(a + b);
    b = a + b;
    a = temp;
  }
  return list;
}

console.log(fib());

function numsToStrings(data) {
  return _.map(data, function (num) {
    return `${num}`;
  });
}

console.log(numsToStrings(fib()));

function numEvenNums(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if ((data[i] % 2) === 0) {
      total++;
    }
  }
  return total;
}

console.log(numEvenNums(fib()));
