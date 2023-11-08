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
    return "Getting to director tasks";
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

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    const director = new Director();
    const directorCall = director.workDirectorTasks();
    console.log(directorCall);
  } else {
    const teacher = new Teacher();
    const teacherCall = teacher.workTeacherTasks();
    console.log(teacherCall);
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    console.log("Teaching Math");
  } else {
    console.log("Teaching History");
  }
}

/*
Exercise 7:
teachClass('Math'); // Teaching Math
teachClass('History'); // Teaching History


//Exercise 6
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); //Getting to director tasks

//Exercise 5
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
*/