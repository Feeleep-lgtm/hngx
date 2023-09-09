const express = require('express');

const app = express();
//const aqp = require("api-query-params")
const cors = require("cors");

app.use(express.json());


const PORT = process.env.PORT || 3000;
let day = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
currentDay = weekday[day.getDay()]
let utc = new Date().toISOString().slice(0, 19) + "Z"
console.log(utc);

app.get('/api?', async (req, res) =>{
   
    let track = req.query.track
    let slack_name = req.query.slack_name
   
    res.status(200).json({
        "slack_name": slack_name,
        "current_day": currentDay,
        "utc_time": utc,
        "github_repo_url": "https://github.com/Feeleep-lgtm/hngx",
        "track": track,
        "github_file_url": "https://github.com/Feeleep-lgtm/hngx/blob/main/index.js",
        "status_code": "200"

    })
})

app.listen(PORT, ()=>{
    console.log('Listening');
})