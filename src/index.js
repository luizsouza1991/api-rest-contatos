const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,PATCH,DELETE");
    app.use(cors());
    next();
});

app.get('/', (req, res) => {
    res.send('ok');
})

require('./controllers/contatoController')(app)
app.listen(3000)
