/// <reference path="Teacher.ts" />
/* Subject.ts */

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    set setTeacher(teacher: Teacher){
      this.teacher = teacher;
    }
  }
}