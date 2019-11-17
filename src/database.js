const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;