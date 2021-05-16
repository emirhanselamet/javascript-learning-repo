let val;
const numbers = new Map();
numbers.set(1, 'one');
numbers.set('2', 'two');
numbers.set(3, 'THREE');
numbers.set('4', 'four');

val = numbers;
val = numbers.get(1);
val = numbers.get('2');

val = numbers.size;
val = numbers.has(1);
val = numbers.has('four');
val = numbers.delete('4');

console.log(val);