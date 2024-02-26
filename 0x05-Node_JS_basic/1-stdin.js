const readline = require('readline');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

readLine.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  readLine.close();
});

readLine.on('close', () => {
  console.log('This important software is now closing');
});
