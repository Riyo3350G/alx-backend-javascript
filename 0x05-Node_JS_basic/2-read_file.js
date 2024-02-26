const fs = require('fs');

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf-8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line.trim())
      .map((line) => line.split(','));

    const studentCount = students.length - 1;

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
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw error;
    }
  }
}

module.exports = countStudents;
