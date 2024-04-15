const express = require('express');
const mysql = require('mysql');


const app = express();


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_data'
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});


app.use(express.json());


app.post('/submit-data', (req, res) => {

  const { name, email, subject, message } = req.body;


  const query = 'INSERT INTO user_data (name, email, subject, message) VALUES (?, ?, ?)';


  connection.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error storing data in the database');
    } else {
      res.send('Data stored in the database successfully!');
    }
  });
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 3000');
});