const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();


mongoose.connect('mongodb://williandias360:acesso225533@ds135876.mlab.com:35876/listacompras', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3333;
}
app.listen(port);


