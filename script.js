function isSameType(value1, value2) {
  if(Number.isNaN(value1) && Number.isNaN(value2))
    return true;
  if(Number.isNaN(value1) || Number.isNaN(value2))
    return false;
  return typeof value1 === typeof value2;
}

console.log(isSameType(1, 2)); // true
console.log(isSameType(1, 'a')); // false
console.log(isSameType(NaN, NaN)); // true
console.log(isSameType(NaN, 1)); // false

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));