function doubleValues(arr) {
  var newArr = [];
  arr.forEach(val => {
    newArry.push(val * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(val => {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

function showFirstAndLast(Arr) {
  var newArr = [];
  arr.forEach(val => {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(val => {
    val[key] = value;
  });
  return arr;
}
