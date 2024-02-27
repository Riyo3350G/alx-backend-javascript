const http = require('http');
const { fileRead } = require('fs/promises');

const hostname = '127.0.0.1';
const port = 1245;

async function studentsData(filepath) {
  const data = await fileRead(filepath, 'utf-8');
  return data.trim().split('\n').slice(1);
}

function parserCsv(data) {
  const parse = data.split(',').map((line) => line.trim());
  return parse;
}

function countStudents(data) {
  const fields = {};
  const students = {};
  data.forEach((element) => {
    const [, firstName, , , field] = parserCsv(element);
    students[field] = students[field] || [];
    students[field].push(firstName);
    fields[field] = (fields[field] || 0) + 1;
  });
  return { fields, students };
}

function respGenerator(data) {
  let resp = `Number of students: ${data.totalStudents}\n`;
  for (const [field, count] of Object.entries(data.fields)) {
    resp += `Number of students in ${field}: ${count.studentNumber}. List: ${count.studentList}\n`;
  }
  return resp;
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    try {
      const dataLn = await studentsData(process.argv[2]);
      const { fields, students } = countStudents(dataLn);
      const data = {
        totalStudents: dataLn.length,
        fields: {},
      };
      for (const [k, v] of Object.entries(fields)) {
        if (k !== 'field') {
          data.fields[k] = {
            studentNumber: v,
            studentList: students[k].join(', '),
          };
        }
      }
      const resp = respGenerator(data);
      res.end(resp);
    } catch (error) {
      res.statusCode = 404;
      res.end('Cannot load the database');
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
