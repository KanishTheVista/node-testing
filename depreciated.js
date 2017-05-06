const express = require('express');
var app = express();
//EXPRESS'app'.[type]('path',function)

app.get('/',(req,res)=>{
res.send('<strong>Hello express</strong>');
});

app.listen(3000,function(){
  console.log('server.js is running');
});
