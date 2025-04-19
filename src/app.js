const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Omnipresence Saved Quotes API');
});

// Add your routes here
app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
