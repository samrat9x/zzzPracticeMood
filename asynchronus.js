const thenable = {
    then: function(onFulfill) {
        setTimeout(() => {
            onFulfill(100); // Call the fulfillment handler asynchronously
        }, 1000);
    }
};

const promise2 = new Promise((resolve, reject) => {
    resolve(thenable); // Resolving with a thenable
});

promise2.then(value => {
    console.log(value); // Output: 100 (after approximately 1 second)
});
