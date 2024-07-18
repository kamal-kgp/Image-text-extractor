const express = require('express');
const router = express.Router();
const multer = require('multer');

const Analysis = require('../models/analysisModel');
const analyzeImage = require('../controllers/analysis');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req, res) => {
  const { text } = req.body;
  const { buffer } = req.file;

  try {
    const ocrResult = await analyzeImage(buffer, text.trim());
    const newAnalysis = new Analysis({
      lang: text,
      imageData: buffer,
      analysisResult: ocrResult,
    });

    await newAnalysis.save();
    res.json({ result: ocrResult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
