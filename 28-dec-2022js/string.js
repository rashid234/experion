var data = 'This is a string';
console.log(data[5]);// used for get single capturing of data items

console.log(data.length);
console.log(data[data.length - 1]);// to get the last element of data

var res = data.toUpperCase(); // converts to uppercase
console.log(res);

// trim() used to remove the spacces from the beginning and end of a string.
var message = '     helllo    ';
console.log(message);
console.log(message.trim());

var message2 = '    how are you';
console.log(message2.split(' '));// used for split based on the character...
console.log(message2.replace(' ','_')); // replace the first occurence only
console.log(message2.replaceAll(' ','_')); // replace each occurence of first parameter with second parameter

console.log(message2
    .trim()
    .replaceAll(' ','_'));  // multiple function calling
