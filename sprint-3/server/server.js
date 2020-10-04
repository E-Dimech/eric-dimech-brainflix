const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || process.argv[2] || 8080;
const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require("react-uuid");
const cors = require('cors');

const videos = require('./modules/data.json');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/videos', (_req, res) => {
    res.json(videos.videos.map((video) => video))
  });

app.get('/videos/:id', (_req, res) => {
    res.json(videos.videos.map((video) => video))
})

app.post('/videos', (req, _res) => {
    
    let newUpVideo = {
        id: uuid(),
        title: req.body.title,
        channel: "ThatNewVid",
        image: req.body.image,
        description: req.body.description,
        views: 1986,
        likes: 1001,
        duration: '2:23',
        video: "",
        timestamp: Date.now(),
        comments: [
        {
          name: "Micheal Lyons",
          comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          likes: 0,
          timestamp: 1545162149000
        },
        {
          name: "Gary Wong",
          comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          likes: 0,
          timestamp: 1544595784046
        },
        {
          name: "Theodore Duncan",
          comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
          likes: 0,
          timestamp: 1542262984046
        },
      ],
    };

    const readData = fs.readFileSync("./modules/data.json");

    const parseData = JSON.parse(readData);
    
    parseData['videos'].push(req.body);

    const stringData = JSON.stringify(parseData);

    fs.writeFileSync('./modules/data.json', stringData, (err) => {
            if (err) throw err;
        });
    })

app.listen(port, () => {
    console.log(`This server is running bitch on ${port}`)
});
