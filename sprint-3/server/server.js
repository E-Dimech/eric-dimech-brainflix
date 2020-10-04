const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || process.argv[2] || 8080;
const bodyParser = require('body-parser');
// const uuid = require('uuid');
const cors = require('cors');
const fs = require('fs');

app.use(bodyParser.json());
app.use(cors());

const videos = require('./modules/data.json');

app.get('/videos', (_req, res) => {
    res.json(videos.videos.map((video) => video))
  });

app.get('/videos/:id', (_req, res) => {
    res.json(videos.videos.map((video) => video))
})

app.post('/videos', (req, res) => {
    // let newUpId = uuid();
    // let newUpVideo = [...videos(newUpVideo)];
    let newUpVideo = {
        id: 10,
        title: req.body.title,
        channel: "ThatNewVid",
        image: req.body.image,
        description: req.body.description,
        views: 1986,
        likes: 1001,
        duration: '2:23',
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

    // loadNewVideo = (videos => [...videos, newUpVideo]);
    // fs.readFileSync(videos, contents);
    // fs.writeFileSync(videos, JSON.stringify(newUpVideo));
    // res.status(201).send(newUpVideo);
    // const fuckYouBs = 
    fs.readFileSync(videos);
    JSON.parse();
    videos.push(newUpVideo);
    fs.writeFileSync(videos, JSON.stringify(newUpVideo));



    // res.send= (loadNewVideo);
    // fs.writeFile('./modules/data.json', newUpVideo,);
    // fs.writeFile('./modules/data.json', JSON.stringify(newUpVideo), err => {
    //     if (err) throw err;
    // });
    // let newUpString = JSON.stringify(newUpVideo);


})

app.use(express.urlencoded({ extended :true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`This server is running bitch on ${port}`)
});
