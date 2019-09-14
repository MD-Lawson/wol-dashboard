//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
var wol = require('node-wol');

// define the Express app
const app = express();
app.use(express.static(`${__dirname}/../../build`));
const path = require('path')

// the database
//const questions = [];

// enhance your app security with Helmet
//app.use(helmet());

// use bodyParser to parse application/json content-type
//app.use(bodyParser.json());

// enable all CORS requests
//app.use(cors());

// log HTTP requests
//app.use(morgan('combined'));
//app.use(wol);

// retrieve all questions
// app.get('/', (req, res) => {
//   const qs = questions.map(q => ({
//     id: q.id,
//     title: q.title,
//     description: q.description,
//     answers: q.answers.length,
//   }));
//   res.send(qs);
// });
app.get('/', function(req, res) {
  res.sendFile(__dirname + '../../build/index.html');
});
app.get('/wake', (req, res) => {
    console.log("ping")
    wol.wake("E0:D5:5E:2E:1A:F5", function(error){
      if(error){
        console.log("error")
        return;
      }
    })
    res.end();
  });

// get a specific question
// app.get('/:id', (req, res) => {
//   const question = questions.filter(q => (q.id === parseInt(req.params.id)));
//   if (question.length > 1) return res.status(500).send();
//   if (question.length === 0) return res.status(404).send();
//   res.send(question[0]);
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
})

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});