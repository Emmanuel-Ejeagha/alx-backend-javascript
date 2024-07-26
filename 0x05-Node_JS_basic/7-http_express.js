const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let [file] = process.argv.slice(2);
  file = file || '';

  countStundents(file)
    .then((value) => {
      res.send(`<pre>This is the list of our students\n${value}</pre>`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245, 'localhost', () => {
  console.log('server is running');
});
module.exports = app;
