//Middleware
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use((req,res,next)=>{
    req.banana = 'banana';
    next();
})
app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('MiddleWare')
});
app.listen(3000);