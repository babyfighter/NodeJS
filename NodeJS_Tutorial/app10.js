//serving static file
const express = require('express')
const path = require('path');
const app = express();
const Joi = require('joi');
const bodyParserer = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'static')));
app.unsubscribe(bodyParserer.urlencoded({extended: false}));
app.use(bodyParserer.json());

app.get('/',(req,res)=>{
    // res.send('Hello world');
    res.sendFile(path.join(__dirname,'static','index.html'))
});

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object().keys(({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required
    }));
    const validation = schema.validate(req.body);
    res.send(validation);

    //Not supported after V16
    // Joi.validate(req.body,schema,(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.send('error occurred');
    //     }
    //     console.log(result);
    //     res.send('successfully posted data')
    // })

    // //database work here
    // res.json({success : true});
});

app.listen(3000);