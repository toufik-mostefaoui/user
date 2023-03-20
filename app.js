const express = require('express');
const route = require('./routes/MyProducts');
const {connectDB} = require('./db');
const cors = require('cors');


const app = express();


app.use(express.json());

app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
   
    next();
  });
app.use('/',route);
app.use('/uploads',express.static('uploads'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
connectDB();


module.exports = app ;

async function  start(){





    app.listen(3000,()=>{
        console.log('listenning in port 3000')
    })


}

start();