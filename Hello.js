const arr = ["samrat", "anaBuby", "valobasabasi", "babykothakar"];
function mapSam(arr, func) {
  let newArr = [];

  for (var i in arr) {
    newArr.push(func(arr[i]));
  }

  return newArr;
}

function myFunc(lang) {
  return lang.length;
}

const hello = mapSam(arr, myFunc);
console.log(hello);
