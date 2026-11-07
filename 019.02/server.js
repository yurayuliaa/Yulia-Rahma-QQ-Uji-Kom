const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ujian'
});

db.connect((err) => {
  if (err) {
    console.error('Gagal konek database:', err.message);
    return;
  }
  console.log('Terhubung ke database ujian');
});

app.get('/', (req, res) => {
  db.query('SELECT id, first_name, last_name FROM users', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ data: rows });
  });
});

app.listen(3000, () => console.log('Server jalan di http://localhost:3000'));