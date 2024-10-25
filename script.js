abu();

var abu = () => {
  console.log("first");
};

abu();

function abu() {
  console.log("second");
}

abu();

let arr = [1, 3, [5, 6]];
console.log(arr.flat());
