/* Advanced types Part 1 */

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{
  workFromHome() {
    return "Working from home";
  };
  getCoffeeBreak() {
    return "Getting a coffee break";
  };
  workDirectorTasks() {
    return "the string Getting to director tasks";
  };
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home"
  };
  getCoffeeBreak() {
    return "Cannot have a break"
  }
  workTeacherTasks() {
    return "Getting to work"
  }
}

function createEmployee(salary: number | string) {
  //if salary is a number an less than 500
  if (typeof salary === "number" && salary < 500){
    return new Teacher();
  } 
  return new Director();
};

/*
//Exercise 1
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
*/