const readDatabasea = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200);
    readDatabasea(process.argv[2])
      .then((data) => {
        let msg = 'This is the list of our students\n';
        for (const field in data) {
          if (Object.prototype.hasOwnProperty.call(data, field)) {
            const value = data[field];
            msg += `Number of students in ${field}: ${value.number}. ${value.students}`;
          }
        }
        response.send(msg);
      })
      .catch((error) => {
        response.send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (request.params.major === 'CS' || request.params.major === 'SWE') {
      response.status(200);
      readDatabasea(process.argv[2])
        .then((data) => {
          const students = data[request.params.major].students.join(', ');
          response.send(`List: ${students}`);
        })
        .catch((error) => {
          response.send(error.message);
        });
    } else {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
