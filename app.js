const express = require('express')
const app = express()

app.get('/', function(req,res) {
    res.send('END POINT INVALIDO');
})

const api = require('./src/routes/api');
app.use('/api', api);

const port = 3000;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})