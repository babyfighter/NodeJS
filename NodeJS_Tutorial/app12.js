const express = require('express')
const path = require('path');
const app = express();
let ejs = require('ejs')

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.get('/LuserQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery}});
});

app.listen(3000);