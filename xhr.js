let obj = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
};

const entries = Object.entries(obj);

for(let element of entries){
	console.log(element[1]);
}



