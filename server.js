const express = require('express');
const app = express();
const port = 3001;

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
