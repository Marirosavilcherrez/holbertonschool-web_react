/* Creating an interface for a student */

interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

let student1: Student = {
  firstName: "Mario",
  lastName: "Lopez",
  age: 25,
  location: "Mexico",
};

let student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 46,
  location: "England",
};

//Create and array and save there the students
const studentsList: Student[] = [student1, student2];

//Create a table
const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function(student){
  const tr = table.insertRow();
  // Create cells for first name and location
  const firstNameCell = tr.insertCell(0);
  const locationCell = tr.insertCell(1);
    
  // Populate the cells with data from the student object
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});