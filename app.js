const express = require('express');
let app = express();
var hbs = require('hbs');
const locals = require('./locals.js');


app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

locals(app)



app.get('/', (req,res)=> {
  res.render('home',  {
    foods: [
      'chalupa',
      'ceviche',
      'candy sprinkles'
    ]
  });
});


app.get('/page2', (req,res)=> {
  res.render('page2')
});


app.listen(4000, ()=>  {
  console.log('Server running on port 4000');
});
