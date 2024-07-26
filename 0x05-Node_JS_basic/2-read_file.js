const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const fields = {};
    let studentCount = 0;

    lines.forEach((line, index) => {
      if (index > 0) {
        // Skip header line
        const parts = line.split(',');
        if (parts.length === 4) {
          studentCount += 1;
          const field = parts[3].trim();
          const firstname = parts[0].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
    });

    console.log(`Number of students: ${studentCount}`);
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const list = fields[field];
        console.log(
          `Number of students in ${field}: ${list.length}. List: ${list.join(
            ', '
          )}`
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
