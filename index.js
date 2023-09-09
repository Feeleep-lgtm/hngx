const express = require('express');
//const moment = require('moment')

const app = express();
//const aqp = require("api-query-params")
const cors = require("cors");
const moment = require('moment');
//const datetime = require('datetime')

app.use(express.json());


const PORT = process.env.PORT || 3000;
const day = new Date()
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// currentDay = weekday[day.getDay()]
// let utc = day.toISOString().slice(0, 19) + "Z"
const currentDay = day.toLocaleString('en-US', {weekday: 'long'});
// const currentDate =moment.utc().format("YYYY-MM-DDTHH:mm:ss[Z]")
//const currentDate = new Date(Date.now()).toISOString().split('.')[0] + 'Z'
// console.log(utc);
const now = new Date().toISOString()//.slice(0, 19) + 'Z';

app.get('/api', async (req, res) =>{
   
    let track = req.query.track
    let slack_name = req.query.slack_name
   
    res.status(200).json({
        "slack_name": slack_name,
        "current_day": currentDay,
        "utc_time": now,//datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ'),
        "github_repo_url": "https://github.com/Feeleep-lgtm/hngx",
        "track": track,
        "github_file_url": "https://github.com/Feeleep-lgtm/hngx/blob/main/index.js",
        "status_code": "200"

    })
})

app.listen(PORT, ()=>{
    console.log('Listening');
})