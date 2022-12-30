const array1 = [1, 2, 3, 4, 5, 6];

// my code
// for (let i = 0; i < array1.length; i++){
//     if ((array1[i] % 2) == 0){
//         array2.push(array1[i]);
//     }
// }

// sirs code
// function isEven(value){
//     return value % 2 == 0;
// }
// array2 = array1.filter(isEven);

// sir another code
const array2 = array1.filter(value => value % 2 == 0); // arrow function is returned without return keyword here.
console.log(array2);
// to check whether the provided value is in there in the array
console.log(array1.includes(10));
// to join the elements in an array  as a string and joined with the provided character
console.log(array1.join('@co-'));
// used to fill the entire array with the provide value
array1.fill(10);
console.log(array1);

