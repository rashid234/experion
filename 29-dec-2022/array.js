const numbers = [1, 2, 3, 'four'];
numbers[0] = 100;                       // values can be changed using index values.
numbers.push(5);                        // used to add new element to the end of the array.
// const number = [1,2,4];
// numbers = number;    this make an error because numbers is const which is not able to reassigned.
console.log(numbers);

let firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
// 
//  firstArray.push(...secondArray);       // spread operator (...) :- used to iterate through the array.
// 
 firstArray = firstArray.concat(secondArray); // concatinate number of array and with out modifing orginal array
//  let thirdArray = firstArray.concat(secondArray);

 console.log(firstArray);
