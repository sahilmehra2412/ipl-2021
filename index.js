const express = require('express');
const connectDB = require('./config/db');
const team = require('./routes/api/teams');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use('/teams', team);

app.listen(5000);
