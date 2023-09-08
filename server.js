require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const endpoint = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/styles/globals.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(`${__dirname}/src/styles/globals.css`);
});

app.get('/api/search', async (req, res) => {
  const { search, page } = req.query;
  try {
    const resp = await axios(`${endpoint}&s=${search}&page=${page}`);
    const result = await resp.data;
    res.json(result);
  } catch (e) {
    res.status(404).json({ error: 'Not Found' });
  }
});

app.get('/api/movie', async (req, res) => {
  const { id } = req.query;
  try {
    const resp = await axios(`${endpoint}&id=${id}`);
    const result = await resp.data;
    res.json(result);
  } catch (e) {
    res.status(404).json({ error: 'Not Found' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
