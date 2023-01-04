const student = {
    namee: 'student1',
    mark1: 24,
    mark2:30,
    totalMarks: function(){ 
        const extraMark = 5;
        return (this.mark1 + this.mark2 + extraMark); // this keyword is used to take the value inside a object.
    }
};
console.log(student.totalMarks());

//  ----------------------------------------- //
// copy becomes a refer
const copyStudent = student;
copyStudent.namee = 'hello';
console.log(student);     // elements in student also changed.


// copy an object without referrence  ... ... ... 
const copyStudent2 = Object.assign({}, student);  // in that curly bracket we can add new items if needed eg-{age:25}
copyStudent2.namee = 'new namee';
console.log(student);     
console.log(copyStudent2);     // it will not change the student

const {namee, mark1} = copyStudent2;
console.log(namee, mark1);

const value = Object.values(student); // obtaining the value from the object
console.log(value);
const key = Object.keys(student);   // obtaining the key of the object.
console.log(key);
key.forEach(key => {
    console.log(student[key]);
});


