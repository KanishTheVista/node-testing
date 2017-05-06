const express = require('express');
const hbs = require('hbs');

var app = express();
//EXPRESS'app'.[type]('path',function)
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');


app.use(express.static(__dirname + '/public'));//using middleware
// __dirname ==> node-web-server
app.get('/',(req,res)=>{
//res.send('<strong>Hello express</strong>');
res.send({
  name:"Kanish",
  city:"Giridih"
});
});

app.get('/about',function(req,res){
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear: new Date().getFullYear()
  });//render working because of -> app.set('view engine','hbs');
});

app.listen(3000,function(){
  console.log('server.js is running');
});
