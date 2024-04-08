const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  // Send the image file that is in the same directory as this script
  res.sendFile(path.join(__dirname, 'gotcha.JPG'));
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
