const http = require('http');

// creates Http server
const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(12345, 'localhost', () => {});
module.exports = app;
