const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

var index = require('./routes/index');
var users = require('./routes/users');

const app = express();

//View engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'client')));

// Body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(cors(corsOptions));

app.use('/', index);
app.use('/api', users);

app.listen(8000, () =>{
    console.log("started");
})