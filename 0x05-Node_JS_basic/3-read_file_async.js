//Reading a file asynchronously with Node JS

const { readFile } = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const results = data.toString().split('\n');
        const fields = {};
        let count = -1;
        let value = '';
        for (const struct of results) {
          if (struct !== '') {
            count += 1;
            const info = struct.split(',');
            if (Object.prototype.hasOwnProperty.call(fields, info[3])) {
              fields[info[3]].push(info[0]);
            } else {
              fields[info[3]] = [];
              fields[info[3]].push(info[0]);
            }
          }
        }
        delete fields.field;
        value += `Number of students: ${count}\n`;
        console.log(`Number of students: ${count}`);
        const keys = Object.keys(fields);
        for (const dat of keys) {
          value += `Number of students in ${dat}: ${
            fields[dat].length
          }. List: ${fields[dat].join(', ')}\n`;
          console.log(
            `Number of students in ${dat}: ${
              fields[dat].length
            }. List: ${fields[dat].join(', ')}`
          );
        }
        resolve(value);
      }
    });
  });
};
