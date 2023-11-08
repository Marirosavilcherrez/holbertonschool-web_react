/// <reference path="Teacher.ts" />
/* React.ts */

namespace Subjects {
  class reactRequires {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    };
    getAvailableTeacher(teacher: Teacher): string {
      if (teacher.experienceTeachingReact == undefined || teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${teacher.firstName}`;
      }
    }  
  }
}