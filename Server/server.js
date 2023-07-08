const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Server/public');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('file');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.get('/file', (req, res) => {
  const filePath = '/public/1687115682070-Milestone05_Hilda_Kibagendi_09.06.2023.pdf';
  res.sendFile(path.join(__dirname, filePath));
  /* const file = fs.createReadStream('./Server/public/1687115682070-
  Milestone05_Hilda_Kibagendi_09.06.2023.pdf');
  const stat = fs.statSync('./Server/public/1687115682070-
  Milestone05_Hilda_Kibagendi_09.06.2023.pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
  file.pipe(res); */
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
