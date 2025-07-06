const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'data', 'students.json');


app.get('/students', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Gagal membaca data mahasiswa' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend berjalan di http://localhost:${PORT}`);
});
