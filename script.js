function add(x) {
  return 10 + x;
}

const memo = (func) => {
  let cache = {};
  return function (x) {
    if (cache[x]) {
      return cache[x];
    } else {
      const result = func(x);
      cache[x] = result;
      return cache[x];
    }
  };
};

const calc = memo(add);
console.log(calc(10));
