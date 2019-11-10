const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
const mongo_url = process.env.MONGO_URL;
console.log(mongo_url);

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);


