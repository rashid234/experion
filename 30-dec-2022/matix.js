
setTimeout(() => {console.log('hello');},5000);

// adding 2 matix
const m1 = [
    [1, 2],
    [3, 4]
];
const m2 = [
    [5, 6],
    [7, 8]
];
const m3 = [];
m1.forEach( (element, index1) =>{
    element.forEach( (items, index2) =>{
        m3.push(( m1[index1][index2] + m2[index1][index2] ));
    });
});
console.log(m3);