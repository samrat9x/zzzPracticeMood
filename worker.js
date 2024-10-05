// In web worker environment, 'self' is the global object
// You can't do DOM operation here
// You can only do CPU-intensive tasks here
// 'self.onmessage' is equivalent to 'onmessage' like 'window.alert()' is equivalent to 'alert()'
// 'onmessage' is a callback function and it is triggered by main thread
onmessage = function(event){
    console.log(event.data);
let total = 0;
for(let i = 0; i < 1000000000; i++){
    total += i;
}

postMessage(total); // after finishing the task, the task is sent to the main thread
// self.close();// It will terminate the worker.

}