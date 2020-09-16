
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
//var protectedRoutes = require("./middleware/protectedRoutes").protectedRoutes;
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());

app.get('/api/', function (req, res) {
  res.send('Hello World!');
});

//const uri = 'mongodb://192.168.1.109:27017/pablo_captcha';
const uri = "mongodb+srv://pablo:Q4RiLiZitXiZ87VN@development-kv9ot.azure.mongodb.net/captcha_pablo?retryWrites=true&w=majority"

const dbConf = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, dbConf).then(
    () => { console.log('Connected to Database');},
    err => { console.log('ERROR: connecting to Database. ' + err);}
);

const captcha = require("./routes/captcha");
app.use("/api/captcha", captcha);

app.listen(3000, function () {
  console.log('Node server running on http://localhost:3000');
});