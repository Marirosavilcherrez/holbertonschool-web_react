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
  return (`${firstElement}.${lastName}`)
}

/*
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