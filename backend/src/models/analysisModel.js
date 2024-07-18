const mongoose = require('mongoose');

const AnalysisSchema = new mongoose.Schema({
  lang: String,
  imageData: Buffer,
  analysisResult: String,
}, { collection: 'imageAnalysis' });

module.exports = mongoose.model('Analysis', AnalysisSchema);
