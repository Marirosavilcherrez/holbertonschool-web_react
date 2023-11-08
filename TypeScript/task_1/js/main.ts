/* Let's build a Teacher interface */

interface Teacher {
  //set during initialization of an object, readonly
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number, //Optional
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  firstName: string, 
  lastname: string,
}

function printTeacher (firstName: Teacher["firstName"], lastName: Teacher["lastName"]) {
  const sliptFirstName = firstName.split('');
  const firstElement = sliptFirstName[0];
  return (`${firstElement}.${lastName}`);
}

interface IStudentClass {
  firstName: string,
  lastName: string,
}

class StudentClass implements IStudentClass{
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}

/*  
//Exercise4:
const student = new StudentClass("John", "Doe"); // create an instance

const homeworkStatus = student.workOnHomework(); // call the methods
const displayName = student.displayName();

console.log("Homework status:", homeworkStatus); // show the results
console.log("Display name:", displayName);


//Exercise3:
const printTeacher1 = printTeacher("John", "Doe")
console.log(printTeacher1)

//Exercise2
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

Exercise1:
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);*/