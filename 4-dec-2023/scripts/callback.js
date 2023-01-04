// this is asynchronous programming
// promise, callback, asynwait        are methods to make asynchronous programming

function doThis(callback){
    setTimeout(()=>{
        const name = 'rashid';
        callback(name);
    },3000);
}
function showResult(name){
    console.log(name);
}
doThis(showResult);
console.log('helloworld');