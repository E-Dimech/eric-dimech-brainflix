const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || process.argv[2] || 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const videos = require('./modules/data.json');
app.get('/videos', (_req, res) => {
    res.json(videos.videos.map((video) => video))
  });

app.get('/videos/:id', (_req, res) => {
    res.json(videos.videos.map((video) => video))
})

app.use(express.urlencoded({ extended :true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`This server is running bitch on ${port}`)
});
