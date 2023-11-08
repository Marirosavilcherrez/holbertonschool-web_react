/// <reference path="Teacher.ts" />
/* Java.ts */

namespace Subjects {
    class javaRequires {
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      };
      getAvailableTeacher(teacher: Teacher): string {
        if (teacher.experienceTeachingJava == undefined || teacher.experienceTeachingJava <= 0) {
          return 'No available teacher';
        } else {
          return `Available Teacher: ${teacher.firstName}`;
        }
      }  
    }
  }
