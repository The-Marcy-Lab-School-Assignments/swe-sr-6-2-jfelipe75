const findByValue = (array, value, i = 0) => {
  if (array[i] === value) return i;
  console.log(array[i]);
  if (i === array.length) return -1;

  return findByValue(array, value, i + 1);
};

console.log(findByValue([1, 2, 3, 4, 5], 3));
