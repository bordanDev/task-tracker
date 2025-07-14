const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')

const tasks = require('./mock/tasks.json')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/tasks', (req, res) => {
  res.json(tasks);
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
