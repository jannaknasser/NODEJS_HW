const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    const myname = req.query.name;
    res.json({"messege":"hello" , "name":myname});
});

app.post('/user',(req,res)=>{
    var bodydata = JSON.stringify( req.body);
    bodydata["messege"]="hello";
    res.json(bodydata);
});


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

