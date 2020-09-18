const express = require('express');
const app = express();
const port = 5000;

app.get('/hey',(req, res) => {
    res.send('ho !')
})


app.listen(port,_=>{
    console.log('server are running port' + port)
})