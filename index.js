const express = require('express');

const app = express();

const cors = require("cors");

app.use(express.json());


const PORT = process.env.PORT || s3000;
let day = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
currentDay = weekday[day.getDay()]
let utc = new Date().getUTCDate

app.get('/api', (req, res) =>{
   
    
    console.log(day);
    res.status(200).json({
        "slack_name": 'Feeleep',
        "current_day": currentDay,
        "utc_time": utc,
        "github_repo_url": "https://github.com/Feeleep-lgtm/hngx",
        "track": "backend",
        "github_file_url": "https://github.com/Feeleep-lgtm/hngx/blob/main/index.js",
        "status_code": "200"

    })
})

app.listen(PORT, ()=>{
    console.log('Listening');
})