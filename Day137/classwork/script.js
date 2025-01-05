const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost:3306',     
  user: 'root',        
  password: 'password12345',       
  database: 'mydb',   
  port: 3306            
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Query error:', err);
    return;
  }
  console.log('Query result:', results[0].solution); 
});

connection.end();
