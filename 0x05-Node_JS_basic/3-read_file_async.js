const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        // Handle file read error
        if (err.code === 'ENOENT') {
          reject(new Error('Cannot load the database'));
        } else {
          reject(err);
        }
      } else {
        const lines = data.split('\n');
        const students = lines.filter((line) => line.trim())
          .map((line) => line.split(','));

        const studentCount = students.length - 1; // Exclude the header

        const fields = {};
        for (const student of students.slice(1)) {
          const field = student[3];
          if (!fields[field]) {
            fields[field] = {
              count: 0,
              firstNames: [],
            };
          }
          fields[field].count += 1;
          fields[field].firstNames.push(student[0]);
        }

        console.log(`Number of students: ${studentCount}`);
        // eslint-disable-next-line guard-for-in
        for (const field in fields) {
          const fieldData = fields[field];
          console.log(`Number of students in ${field}: ${fieldData.count}. List: ${fieldData.firstNames.join(', ')}`);
        }

        resolve(); // Resolve the Promise when processing is done
      }
    });
  });
}

module.exports = countStudents;
