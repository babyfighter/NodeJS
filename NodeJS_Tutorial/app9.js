// express web frame
const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.listen(3000);

app.get('/example',(req,res)=>{
    res.send('hitting example');
});
//route params
// app.get('/example/:name/:age',(req,res)=>{
//     console.log(req.params);
//     res.send(req.params.name+":" + req.params.age);
// });

//query string params
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name+":" + req.params.age)
});