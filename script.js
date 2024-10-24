function add(x) {
  return 10 + x;
}

const memo = (func) => {
  let cache = {};
  return function (x) {
    if (cache[x]) {
      return "cached result: " + cache[x];
    } else {
      const result = func(x);
      cache[x] = result;
      return "new calculated result: " + cache[x];
    }
  };
};

const calc = memo(add);
console.log(calc(10));
console.log(calc(10));
console.log(calc(10));
console.log(calc(30));
console.log(calc(30));
