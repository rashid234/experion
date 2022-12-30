
greet();

function greet(){
    console.log('hello world');
}

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
const res = add(1, 3);
console.log(res);

function convertCasing(value) {
    return value.toUpperCase();
    
}

console.log(convertCasing('helo'));

function getFirst1(value){
    return value[0];
}
const getFirst2 = function (value){
    return value[0];
};

const getFirst3 = (value) => {   // arrow function
return value[0];
}; 


// var hai = {'hi':2};
// var d = {'hi':()=>{
//     console.log('helloworld');
// } };

// d.hi();
// console.log(typeof hai);
