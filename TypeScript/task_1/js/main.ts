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

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);