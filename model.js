const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const fileSchema = new mongoose.Schema({
  name: String,
  type: String,
  size: String
})

const File = mongoose.model('file', fileSchema);

module.exports = {
  File: File
};