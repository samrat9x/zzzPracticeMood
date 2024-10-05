let obj = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
};

function* generator(obj){
    const entries = Object.entries(obj);
    for(let element of entries){
        yield element[1];
        console.log("Hello there");           
    }
}

let iterator = generator(obj);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for(let el of iterator){
//     console.log(el);
// }

// console.log([...iterator]);