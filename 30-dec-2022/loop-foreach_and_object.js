const number = [1, 2, 3, 4, 'hello', 'c#'];
// number.forEach((element) => {   // foreach is a loop.
//     console.log(element);
// });

number.forEach((element, index) => {
    console.log(index, element);
});
// callback funtion is the function which is not called by the programmar unless it was called by another function.



// ------------------------------------ //
// object without class
const person = {
    nam: 'john Doe',
    age: 20
};
console.log(person.nam);
person.nam = 'sugu';
person.email = 'mail@.com';
console.log(person);
console.log(person['age']);         // it is another syntax.

//  nested object :==== object inside other object . . . . . . 
const person2 = {
    nam: 'john Doe',
    age: 20,
    experience: [
        {
            company: 'abc',
            years: 2
        },
        {
            company: 'efg',
            years: 3
        },
        {
            company: 'hijk',
            years: 5
        }
    ]
};
console.log(person2.experience[1].company);