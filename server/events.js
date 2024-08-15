const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());


const uploadDir = path.join(__dirname, 'public/images');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/home', upload.single('file'), (req, res) => {
  console.log(req.file); // Logs file details
  res.send('File uploaded successfully.');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
