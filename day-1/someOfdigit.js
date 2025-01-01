function someOfdigit(number) {
 const digits = number.toString().split('');
 const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
  return sum;
}
console.log(someOfdigit(123));
console.log(someOfdigit(456));